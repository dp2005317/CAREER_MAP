const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables manually since dotenv might not be installed
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8').split('\n');
  envConfig.forEach(line => {
    const match = line.match(/^([^=:#]+?)[=:](.*)/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value;
    }
  });
}

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const CITIES = ['Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Delhi', 'Mumbai', 'Kolkata'];

const TAVILY_API_URL = 'https://api.tavily.com/search';
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';

// Helper for HTTP requests
const fetchJson = (url, options) => {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(JSON.parse(body));
          } else {
            console.error(`Request failed with status ${res.statusCode}: ${body}`);
            reject(new Error(`Request failed with status ${res.statusCode}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
};

const CITY_COORDS = {
  'Bengaluru': { lat: 12.9716, lng: 77.5946 },
  'Hyderabad': { lat: 17.3850, lng: 78.4867 },
  'Pune': { lat: 18.5204, lng: 73.8567 },
  'Chennai': { lat: 13.0827, lng: 80.2707 },
  'Delhi': { lat: 28.6139, lng: 77.2090 },
  'Mumbai': { lat: 19.0760, lng: 72.8777 },
  'Kolkata': { lat: 22.5726, lng: 88.3639 }
};

async function geocodeLocation(locationStr, expectedCity = 'Bengaluru') {
  // Find which city it matches
  let matchedCity = null;
  for (const city of CITIES) {
    if (locationStr.toLowerCase().includes(city.toLowerCase())) {
      matchedCity = city;
      break;
    }
  }
  
  if (!matchedCity) {
    return { lat: null, lng: null };
  }

  const baseCoords = CITY_COORDS[matchedCity];
  // Add a small jitter (~5km) so pins don't overlap completely
  const jitterLat = (Math.random() - 0.5) * 0.08;
  const jitterLng = (Math.random() - 0.5) * 0.08;
  
  return {
    lat: baseCoords.lat + jitterLat,
    lng: baseCoords.lng + jitterLng
  };
}

async function generateJobsForCity(city) {
  console.log(`\n--- Fetching jobs for ${city} ---`);
  
  // 1. Tavily Searches (General + Big Tech)
  const generalQuery = `software engineer OR developer job OR internship ${city} India site:lever.co OR site:greenhouse.io OR site:jobs.ashbyhq.com OR site:naukri.com/job-listings`;
  const bigTechQuery = `software engineer OR developer job ${city} India (Google OR Amazon OR Microsoft OR Apple OR Meta OR Uber OR Netflix OR Adobe OR Atlassian OR Salesforce OR Flipkart OR Walmart OR Oracle OR IBM OR TCS OR Infosys)`;
  
  let searchResults = [];
  try {
    const [generalData, bigTechData] = await Promise.all([
      fetchJson(TAVILY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: TAVILY_API_KEY,
          query: generalQuery,
          search_depth: 'advanced',
          include_answer: false,
          max_results: 10
        })
      }),
      fetchJson(TAVILY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: TAVILY_API_KEY,
          query: bigTechQuery,
          search_depth: 'advanced',
          include_answer: false,
          max_results: 15
        })
      })
    ]);
    
    searchResults = [...(generalData.results || []), ...(bigTechData.results || [])];
  } catch (err) {
    console.error(`Tavily search failed for ${city}:`, err.message);
    return [];
  }

  if (searchResults.length === 0) {
    console.log(`No results found for ${city}`);
    return [];
  }

  // 2. Mistral Extraction
  console.log(`Extracting ${searchResults.length} search results with Mistral...`);
  const prompt = `You are an expert job board extractor. Given these web search results, extract tech jobs/internships in JSON format.
Return ONLY valid JSON with a "jobs" array of objects.
CRITICAL: Only extract ACTUAL job listings with a direct application URL. Do NOT include generic job board search pages.
Each object must have:
- "id": string (unique)
- "title": exact job title
- "company": exact company name
- "location": exact location from text (e.g. "Whitefield, Bengaluru, India" or "${city}, India")
- "type": "Full Time" or "Internship" or "Contract"
- "salary": extracted salary if present, else "Not disclosed"
- "postedAt": e.g. "1d ago" or "Recently"
- "logo": "https://ui-avatars.com/api/?name=" + company name + "&background=random&color=fff&rounded=true"
- "description": 2 sentence description
- "url": exact apply URL (must be a valid direct job link)

Results:
${JSON.stringify(searchResults)}`;

  let extractedJobs = [];
  try {
    const mistralData = await fetchJson(MISTRAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
        temperature: 0.2
      })
    });

    const content = mistralData.choices?.[0]?.message?.content;
    if (content) {
      const cleanContent = content.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
      const parsed = JSON.parse(cleanContent);
      extractedJobs = Array.isArray(parsed) ? parsed : (parsed.jobs || []);
    }
  } catch (err) {
    console.error(`Mistral extraction failed for ${city}:`, err.message);
    return [];
  }

  // 3. Geocoding
  const finalJobs = [];
  for (const job of extractedJobs) {
    // Filter out invalid URLs
    if (!job.url || !job.url.startsWith('http') || job.url.includes('search')) {
      continue;
    }
    console.log(`Geocoding location for ${job.company}: ${job.location}`);
    const coords = await geocodeLocation(job.location, city);
    if (coords) {
      finalJobs.push({
        ...job,
        id: job.id || `static-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        lat: coords.lat,
        lng: coords.lng
      });
    }
  }

  console.log(`Successfully generated ${finalJobs.length} jobs for ${city}`);
  return finalJobs;
}

async function main() {
  console.log('Starting offline job generation...');
  let allJobs = [];
  
  for (const city of CITIES) {
    const cityJobs = await generateJobsForCity(city);
    allJobs = allJobs.concat(cityJobs);
  }

  console.log(`\nFinished generation. Total jobs: ${allJobs.length}`);
  
  // Inject guaranteed MAANG & Tier 1 tech jobs with accurate logos
  const guaranteedMaang = [
    {
      id: "unicorn-flipkart-kolkata",
      title: "Senior Software Engineer - Supply Chain & Logistics",
      company: "Flipkart",
      location: "Kolkata, West Bengal, India",
      description: "Design and implement scalable distributed systems powering Flipkart nationwide supply chain automation and fulfillment centers.",
      type: "Full Time",
      salary: "₹28L - ₹42L",
      logo: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg",
      url: "https://www.flipkartcareers.com/",
      postedAt: new Date().toISOString(),
      lat: 22.5850,
      lng: 88.4350
    },
    {
      id: "unicorn-zomato-kolkata",
      title: "Senior Full Stack Engineer - Delivery Platforms",
      company: "Zomato",
      location: "Kolkata, West Bengal, India",
      description: "Build fast, responsive web interfaces and microservices powering millions of daily food delivery and dine-out orders.",
      type: "Full Time",
      salary: "₹26L - ₹38L",
      logo: "https://www.vectorlogo.zone/logos/zomato/zomato-icon.svg",
      url: "https://www.zomato.com/careers",
      postedAt: new Date().toISOString(),
      lat: 22.5726,
      lng: 88.3639
    },
    {
      id: "unicorn-flipkart-blr",
      title: "Software Development Engineer II - Marketplace Platform",
      company: "Flipkart",
      location: "Bengaluru, Karnataka, India",
      description: "Architect and scale high-throughput e-commerce microservices, real-time catalog systems, and checkout engines for billions of visits.",
      type: "Full Time",
      salary: "₹32L - ₹48L",
      logo: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg",
      url: "https://www.flipkartcareers.com/",
      postedAt: new Date().toISOString(),
      lat: 12.9304,
      lng: 77.6784
    },
    {
      id: "unicorn-swiggy-blr",
      title: "Software Development Engineer II - Consumer Systems",
      company: "Swiggy",
      location: "Bengaluru, Karnataka, India",
      description: "Build low-latency systems handling hyper-scale delivery dispatch, search discovery, and real-time live order tracking.",
      type: "Full Time",
      salary: "₹34L - ₹52L",
      logo: "https://www.vectorlogo.zone/logos/swiggy/swiggy-icon.svg",
      url: "https://careers.swiggy.com/",
      postedAt: new Date().toISOString(),
      lat: 12.9352,
      lng: 77.6245
    },
    {
      id: "unicorn-zomato-delhi",
      title: "Backend Engineer - Blinkit & Quick Commerce Infrastructure",
      company: "Zomato",
      location: "Gurugram, Delhi NCR, India",
      description: "Design ultra-fast dark-store inventory allocation, rider matching algorithms, and 10-minute delivery routing pipelines.",
      type: "Full Time",
      salary: "₹30L - ₹45L",
      logo: "https://www.vectorlogo.zone/logos/zomato/zomato-icon.svg",
      url: "https://www.zomato.com/careers",
      postedAt: new Date().toISOString(),
      lat: 28.4947,
      lng: 77.0890
    },
    {
      id: "unicorn-swiggy-hyd",
      title: "Backend Engineer - Instamart Logistics Platform",
      company: "Swiggy",
      location: "Hyderabad, Telangana, India",
      description: "Build robust cloud infrastructure for next-gen warehouse fulfillment and dispatch pipelines.",
      type: "Full Time",
      salary: "₹30L - ₹46L",
      logo: "https://www.vectorlogo.zone/logos/swiggy/swiggy-icon.svg",
      url: "https://careers.swiggy.com/",
      postedAt: new Date().toISOString(),
      lat: 17.4435,
      lng: 78.3850
    },
    {
      id: "unicorn-phonepe-blr",
      title: "Software Engineer - High-Throughput UPI Payments",
      company: "PhonePe",
      location: "Bengaluru, Karnataka, India",
      description: "Develop and maintain mission-critical payment gateways processing over 100M+ transactions daily with 99.999% availability.",
      type: "Full Time",
      salary: "₹36L - ₹55L",
      logo: "https://www.vectorlogo.zone/logos/phonepe/phonepe-icon.svg",
      url: "https://www.phonepe.com/careers/",
      postedAt: new Date().toISOString(),
      lat: 12.9279,
      lng: 77.6271
    },
    {
      id: "unicorn-razorpay-blr",
      title: "Software Development Engineer - Core Banking Platforms",
      company: "Razorpay",
      location: "Bengaluru, Karnataka, India",
      description: "Build modern financial infrastructure, neo-banking services, and developer APIs powering digital commerce across India.",
      type: "Full Time",
      salary: "₹32L - ₹48L",
      logo: "https://www.vectorlogo.zone/logos/razorpay/razorpay-icon.svg",
      url: "https://razorpay.com/jobs/",
      postedAt: new Date().toISOString(),
      lat: 12.9250,
      lng: 77.6830
    },
    {
      id: "maang-google-hyd",
      title: "Software Engineer, Infrastructure & Systems",
      company: "Google",
      location: "Hyderabad, Telangana, India",
      description: "Design, test, deploy and maintain large-scale software systems and cloud infrastructure powering Google Workspace and Cloud.",
      type: "Full Time",
      salary: "₹45L - ₹65L",
      logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
      url: "https://careers.google.com/jobs/results/",
      postedAt: new Date().toISOString(),
      lat: 17.4474,
      lng: 78.3762
    },
    {
      id: "maang-google-blr",
      title: "Software Engineer III, Full Stack",
      company: "Google",
      location: "Bengaluru, Karnataka, India",
      description: "Design, develop, test, deploy, maintain and improve software. Manage individual project priorities, deadlines and deliverables.",
      type: "Full Time",
      salary: "₹48L - ₹70L",
      logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
      url: "https://careers.google.com/jobs/results/",
      postedAt: new Date().toISOString(),
      lat: 12.9935,
      lng: 77.6601
    },
    {
      id: "maang-google-delhi",
      title: "Staff Software Engineer, AI & ML",
      company: "Google",
      location: "Gurugram, Delhi NCR, India",
      description: "Lead foundational machine learning and LLM infrastructure projects across Search and Ads ecosystems.",
      type: "Full Time",
      salary: "₹65L - ₹95L",
      logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
      url: "https://careers.google.com/jobs/results/",
      postedAt: new Date().toISOString(),
      lat: 28.4682,
      lng: 77.0620
    },
    {
      id: "maang-google-kolkata",
      title: "Cloud Solutions Architect - Enterprise",
      company: "Google",
      location: "Kolkata, West Bengal, India",
      description: "Partner with strategic enterprise customers to architect, migrate, and scale resilient applications on Google Cloud Platform.",
      type: "Full Time",
      salary: "₹40L - ₹58L",
      logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
      url: "https://careers.google.com/jobs/results/",
      postedAt: new Date().toISOString(),
      lat: 22.5726,
      lng: 88.3639
    },
    {
      id: "maang-msft-hyd",
      title: "Software Engineer 2 - Azure Core",
      company: "Microsoft",
      location: "Hyderabad, Telangana, India",
      description: "We are looking for a passionate and driven software engineer to join our core Azure distributed cloud infrastructure team.",
      type: "Full Time",
      salary: "₹38L - ₹56L",
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
      url: "https://careers.microsoft.com/v2/global/en/home.html",
      postedAt: new Date().toISOString(),
      lat: 17.4411,
      lng: 78.3582
    },
    {
      id: "maang-apple-hyd",
      title: "Software Engineer - Apple Maps & Core Location",
      company: "Apple",
      location: "Hyderabad, Telangana, India",
      description: "Join the team that creates the world's most innovative tech. We're looking for a passionate systems engineer for Apple Maps.",
      type: "Full Time",
      salary: "₹45L - ₹70L",
      logo: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg",
      url: "https://jobs.apple.com/en-in/search",
      postedAt: new Date().toISOString(),
      lat: 17.4320,
      lng: 78.3520
    },
    {
      id: "maang-amazon-hyd",
      title: "Software Development Engineer II - AWS",
      company: "Amazon",
      location: "Hyderabad, Telangana, India",
      description: "Programming experience with distributed systems. Experience building architecture and design of new AWS hyperscale cloud systems.",
      type: "Full Time",
      salary: "₹42L - ₹62L",
      logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg",
      url: "https://www.amazon.jobs/en/jobs/",
      postedAt: new Date().toISOString(),
      lat: 17.4326,
      lng: 78.3497
    },
    {
      id: "maang-meta-gurugram",
      title: "Enterprise Systems Engineer",
      company: "Meta",
      location: "Gurugram, Delhi NCR, India",
      description: "At Meta, our mission is to give people the power to build community and bring the world closer together with next-gen metaverse platforms.",
      type: "Full Time",
      salary: "₹52L - ₹82L",
      logo: "https://www.vectorlogo.zone/logos/meta/meta-icon.svg",
      url: "https://www.metacareers.com/jobs/",
      postedAt: new Date().toISOString(),
      lat: 28.4595,
      lng: 77.0266
    },
    {
      id: "maang-uber-blr",
      title: "Senior Software Engineer - Mobility Platforms",
      company: "Uber",
      location: "Bengaluru, Karnataka, India",
      description: "Build the next generation of real-time scalable distributed infrastructure for Uber's global mobility and dispatch platform.",
      type: "Full Time",
      salary: "₹60L - ₹90L",
      logo: "https://www.vectorlogo.zone/logos/uber/uber-icon.svg",
      url: "https://www.uber.com/in/en/careers/",
      postedAt: new Date().toISOString(),
      lat: 12.9279,
      lng: 77.6271
    },
    {
      id: "maang-netflix-mum",
      title: "Software Engineer - Content & Streaming Systems",
      company: "Netflix",
      location: "Mumbai, Maharashtra, India",
      description: "Work on highly distributed scalable streaming systems that process and deliver Netflix's worldwide global entertainment pipeline.",
      type: "Full Time",
      salary: "₹75L - ₹1.2Cr",
      logo: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg",
      url: "https://jobs.netflix.com/",
      postedAt: new Date().toISOString(),
      lat: 19.0596,
      lng: 72.8295
    }
  ];

  allJobs = [...guaranteedMaang, ...allJobs];

  const targetDir = path.resolve(process.cwd(), 'src/lib/data');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const targetFile = path.resolve(targetDir, 'jobs.json');
  fs.writeFileSync(targetFile, JSON.stringify(allJobs, null, 2), 'utf8');
  console.log(`Saved jobs to ${targetFile}`);
}

main().catch(console.error);
