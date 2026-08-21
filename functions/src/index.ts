import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

// Fetch from Remotive API (Real Data)
export const jobAggregator = functions.pubsub
  .schedule("every 12 hours")
  .onRun(async (context) => {
    console.log("Running job aggregator...");

    try {
      const response = await fetch("https://remotive.com/api/remote-jobs?limit=50");
      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.statusText}`);
      }

      const data = await response.json();
      const jobs = data.jobs || [];

      console.log(`Fetched ${jobs.length} jobs from Remotive API.`);

      const batch = db.batch();
      let addedCount = 0;

      for (const job of jobs) {
        const jobRef = db.collection("jobs").doc(job.id.toString());
        
        // Randomize location slightly around some core cities just for Map visualization
        // In a real scenario with full geocoding, we'd use a geocoder.
        // Remotive provides `candidate_required_location` which is text (e.g., "Worldwide", "USA", "Europe").
        // We'll assign a random Indian city from our supported cities just to visualize them on the map.
        const CITIES = {
          Bangalore: [12.9716, 77.5946],
          Kolkata: [22.5726, 88.3639],
          Hyderabad: [17.3850, 78.4867],
          Delhi: [28.6139, 77.2090],
          Mumbai: [19.0760, 72.8777],
          Pune: [18.5204, 73.8567]
        };
        const cityNames = Object.keys(CITIES);
        const randomCity = cityNames[Math.floor(Math.random() * cityNames.length)];
        const coords = CITIES[randomCity as keyof typeof CITIES];
        
        const lat = coords[0] + (Math.random() - 0.5) * 1.5;
        const lng = coords[1] + (Math.random() - 0.5) * 1.5;

        // Strip HTML from description
        const cleanDescription = job.description ? job.description.replace(/<[^>]*>?/gm, '').substring(0, 300) + '...' : '';

        const jobData = {
          id: job.id,
          title: job.title,
          company: job.company_name,
          location: job.candidate_required_location || "Remote",
          lat,
          lng,
          type: job.job_type === "full_time" ? "Full Time" : "Remote",
          salary: job.salary || "Not specified",
          postedAt: job.publication_date,
          logo: job.company_logo || `https://ui-avatars.com/api/?name=${job.company_name}&background=random&color=fff&rounded=true`,
          description: cleanDescription,
          url: job.url,
          source: "Remotive",
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        };

        batch.set(jobRef, jobData, { merge: true });
        addedCount++;
        
        if (addedCount >= 50) break; // Limit batch size for this example
      }

      await batch.commit();
      console.log(`Successfully aggregated and saved ${addedCount} jobs.`);
    } catch (error) {
      console.error("Error in job aggregator:", error);
    }
    
    return null;
  });
