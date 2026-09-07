import { Job } from "./mockData";

export function getExactJobApplyUrl(job: {
  title: string;
  company: string;
  location: string;
  url?: string;
}): string {
  const company = (job.company || "").toLowerCase().trim();
  const title = job.title || "";
  const city = (job.location || "").split(",")[0].trim();

  // If the existing URL is already a specific deep-link ATS or direct posting URL, use it
  if (
    job.url &&
    (job.url.includes("boards.greenhouse.io/") ||
      job.url.includes("jobs.lever.co/") ||
      job.url.includes("jobs.ashbyhq.com/") ||
      job.url.includes("myworkdayjobs.com/") ||
      job.url.includes("smartrecruiters.com/") ||
      job.url.includes("/job/") ||
      job.url.includes("/jobs/details/") ||
      job.url.includes("/careers/job/"))
  ) {
    return job.url;
  }

  // Exact deep-linked portal search query URLs
  if (company.includes("google")) {
    return `https://www.google.com/about/careers/applications/jobs/results/?q=${encodeURIComponent(
      title
    )}&location=${encodeURIComponent(city)}`;
  }

  if (company.includes("microsoft")) {
    return `https://jobs.careers.microsoft.com/global/en/search?q=${encodeURIComponent(
      title
    )}&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true`;
  }

  if (company.includes("amazon")) {
    return `https://www.amazon.jobs/en/search?base_query=${encodeURIComponent(
      title
    )}&loc_query=${encodeURIComponent(city + ", India")}`;
  }

  if (company.includes("apple")) {
    return `https://jobs.apple.com/en-in/search?search=${encodeURIComponent(
      title
    )}&location=india-INDC`;
  }

  if (company.includes("meta")) {
    return `https://www.metacareers.com/jobs?q=${encodeURIComponent(title)}`;
  }

  if (company.includes("uber")) {
    return `https://www.uber.com/global/en/careers/list/?query=${encodeURIComponent(
      title
    )}`;
  }

  if (company.includes("netflix")) {
    return `https://jobs.netflix.com/search?q=${encodeURIComponent(title)}`;
  }

  if (company.includes("flipkart")) {
    return `https://www.flipkartcareers.com/#!/search-result?q=${encodeURIComponent(
      title
    )}`;
  }

  if (company.includes("swiggy")) {
    return `https://careers.swiggy.com/#/search?keyword=${encodeURIComponent(
      title
    )}`;
  }

  if (company.includes("phonepe")) {
    return `https://www.phonepe.com/careers/job-openings/?department=Engineering&location=${encodeURIComponent(
      city
    )}`;
  }

  if (company.includes("razorpay")) {
    return `https://razorpay.com/jobs/?search=${encodeURIComponent(title)}`;
  }

  if (company.includes("tcs") || company.includes("tata consultancy")) {
    return `https://www.tcs.com/careers/india?search=${encodeURIComponent(title)}`;
  }

  if (company.includes("infosys")) {
    return `https://career.infosys.com/joblist?keyword=${encodeURIComponent(title)}`;
  }

  if (company.includes("intel")) {
    return `https://jobs.intel.com/en/search-jobs/${encodeURIComponent(title)}/India/599/2/1269750/20/77/50/2`;
  }

  if (company.includes("samsung")) {
    return `https://www.samsung.com/in/about-us/careers/?search=${encodeURIComponent(title)}`;
  }

  if (company.includes("cisco")) {
    return `https://jobs.cisco.com/jobs/SearchJobs/${encodeURIComponent(title)}?21178=%5B16948%5D&21178_format=6020`;
  }

  if (company.includes("qualcomm")) {
    return `https://qualcomm.wd5.myworkdayjobs.com/External?q=${encodeURIComponent(title)}`;
  }

  if (company.includes("wipro")) {
    return `https://careers.wipro.com/careers-home/jobs?keywords=${encodeURIComponent(title)}`;
  }

  if (company.includes("zomato")) {
    return `https://www.google.com/search?q=${encodeURIComponent(
      `${title} ${job.company} ${city} apply online job`
    )}&ibp=htl;jobs`;
  }

  // If there's an existing url that isn't a root homepage
  if (job.url && job.url.length > 35 && !job.url.endsWith("/careers") && !job.url.endsWith("/jobs")) {
    return job.url;
  }

  // Google Jobs direct search for the exact role
  return `https://www.google.com/search?q=${encodeURIComponent(
    `${title} ${job.company} ${city} apply job`
  )}&ibp=htl;jobs`;
}
