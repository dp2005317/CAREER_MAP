export const CITIES = {
  Bangalore: [12.9716, 77.5946],
  Kolkata: [22.5726, 88.3639],
  Hyderabad: [17.3850, 78.4867],
  Delhi: [28.6139, 77.2090],
  Mumbai: [19.0760, 72.8777],
  Pune: [18.5204, 73.8567]
};

export const JOB_TYPES = ['Internship', 'Full Time', 'Startup', 'Remote'];
export const DOMAINS = ['Frontend', 'Backend', 'AI/ML', 'Data Science', 'Design'];

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  lat: number;
  lng: number;
  type: string;
  salary: string;
  postedAt: string;
  logo: string;
  description: string;
  url?: string;
  source?: string;
  distance?: number;
}

export const generateMockJobs = (): Job[] => {
  const jobs: Job[] = [];
  let idCounter = 1;
  
  Object.entries(CITIES).forEach(([city, coords]) => {
    for (let i = 0; i < 15; i++) {
      const lat = coords[0] + (Math.random() - 0.5) * 1.5;
      const lng = coords[1] + (Math.random() - 0.5) * 1.5;
      const type = JOB_TYPES[Math.floor(Math.random() * JOB_TYPES.length)];
      
      jobs.push({
        id: (idCounter++).toString(),
        title: `${DOMAINS[Math.floor(Math.random() * DOMAINS.length)]} Engineer`,
        company: `TechCorp ${city} ${i + 1}`,
        location: city,
        lat,
        lng,
        type,
        salary: type === 'Internship' ? '₹20k - ₹40k/mo' : '₹12L - ₹24L/yr',
        postedAt: `${Math.floor(Math.random() * 10) + 1}d ago`,
        logo: `https://ui-avatars.com/api/?name=${city[0]}+C&background=random&color=fff&rounded=true`,
        description: "Join our highly motivated team to build scalable applications. You will be working with bleeding-edge technologies in a fast-paced, innovative environment.",
      });
    }
  });
  return jobs;
};

export const generateJobsNearCoordinates = (lat: number, lng: number, city = 'Your Area'): Job[] => {
  const titles = [
    'Frontend Developer Intern',
    'Full Stack Engineer',
    'React & Next.js Developer',
    'AI / ML Engineer',
    'Software Engineer (Backend)',
    'Data Analyst Intern',
    'Product Designer (UI/UX)',
    'DevOps & Cloud Engineer',
    'Mobile App Developer (Flutter/React Native)',
    'Junior Python Developer'
  ];

  const companies = [
    'Swiggy Labs',
    'Zomato Tech',
    'Razorpay',
    'Cred Technologies',
    'Flipkart Internet',
    'Infosys Digital',
    'TCS Innovations',
    'Zoho Corp',
    'Ola Mobility',
    'PhonePe'
  ];

  return titles.map((title, i) => {
    const company = companies[i % companies.length];
    const type = i % 2 === 0 ? 'Internship' : (i % 3 === 0 ? 'Startup' : 'Full Time');
    const salary = type === 'Internship' ? '₹25,000 - ₹45,000/mo' : (type === 'Startup' ? '₹8L - ₹16L/yr' : '₹12L - ₹24L/yr');
    
    // Spread around the user's coordinates (within ~2-5km)
    const jobLat = lat + (Math.random() - 0.5) * 0.05;
    const jobLng = lng + (Math.random() - 0.5) * 0.05;

    return {
      id: `near-${i + 1}-${Date.now()}`,
      title,
      company: `${company} (${city})`,
      location: city,
      lat: jobLat,
      lng: jobLng,
      type,
      salary,
      postedAt: `${(i % 5) + 1}d ago`,
      logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=random&color=fff&rounded=true`,
      description: `Exciting opportunity at ${company} for passionate ${title} candidates. Work with cutting-edge tools, collaborate with dynamic teams, and grow your career.`,
      url: `https://www.google.com/search?q=${encodeURIComponent(`${title} ${company} jobs ${city} apply`)}`,
      source: 'Direct Opportunity'
    };
  });
};

export const MOCK_JOBS = generateMockJobs();
