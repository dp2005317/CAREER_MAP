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
        logo: `/logos/tcs.svg`,
        description: "Join our highly motivated team to build scalable applications. You will be working with bleeding-edge technologies in a fast-paced, innovative environment.",
      });
    }
  });
  return jobs;
};

import staticJobsData from '@/data/jobs.json';

export const generateJobsNearCoordinates = (lat: number, lng: number, city = 'Your Area'): Job[] => {
  const jobsList = staticJobsData as Job[];
  const R = 6371;

  return jobsList
    .filter((j) => typeof j.lat === 'number' && typeof j.lng === 'number')
    .map((j) => {
      const dLat = (j.lat - lat) * (Math.PI / 180);
      const dLon = (j.lng - lng) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat * (Math.PI / 180)) * Math.cos(j.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return {
        ...j,
        distance: Math.round(R * c),
      };
    })
    .sort((a, b) => (a.distance || 0) - (b.distance || 0));
};

export const MOCK_JOBS = staticJobsData as Job[];

