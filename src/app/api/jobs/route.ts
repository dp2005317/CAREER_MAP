import { NextResponse } from 'next/server';
import { generateJobsNearCoordinates } from '@/backend/mockData';
import staticJobsData from '@/data/jobs.json';
import fs from 'fs';
import path from 'path';

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  return R * c; 
}

const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';
const TAVILY_API_URL = 'https://api.tavily.com/search';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latStr = searchParams.get('lat');
  const lngStr = searchParams.get('lng');

  if (!latStr || !lngStr) {
    return NextResponse.json({ error: 'Missing lat or lng' }, { status: 400 });
  }

  const lat = parseFloat(latStr);
  const lng = parseFloat(lngStr);

  let city = 'India';

  try {
    // 1. Reverse Geocode to get City / Region name using Mapbox
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (mapboxToken) {
      try {
        const geoRes = await fetch(
          `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lng}&latitude=${lat}&access_token=${mapboxToken}`,
          { next: { revalidate: 86400 } }
        );
        const geoData = await geoRes.json();
        if (geoData.features && geoData.features.length > 0) {
          const place = geoData.features[0];
          const context = place.properties?.context;
          city = context?.place?.name || context?.region?.name || place.properties?.name || 'India';
        }
      } catch (geoErr) {
        console.warn('Mapbox reverse geocode fallback:', geoErr);
      }
    }

    const gmapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GMAP_API_KEY;
    if (gmapKey && city === 'India') {
      try {
        const gRes = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${gmapKey}`,
          { next: { revalidate: 86400 } }
        );
        const gData = await gRes.json();
        if (gData.results && gData.results.length > 0) {
          const comp = gData.results[0].address_components?.find((c: any) =>
            c.types.includes('locality') || c.types.includes('administrative_area_level_2')
          );
          if (comp?.long_name) {
            city = comp.long_name;
          }
        }
      } catch (gErr) {
        console.warn('Google Maps reverse geocode fallback:', gErr);
      }
    }

    const tavilyKey = process.env.TAVILY_API_KEY;
    const mistralKey = process.env.MISTRAL_API_KEY;

    let jobs: any[] = [];

    // 1.5 Load static curated real tech jobs dataset with precise office coordinates
    try {
      const jobsWithDistance = (staticJobsData as any[])
        .filter((job) => typeof job.lat === 'number' && typeof job.lng === 'number')
        .map((job) => ({
          ...job,
          distance: Math.round(getDistanceKm(lat, lng, job.lat, job.lng))
        }))
        .sort((a, b) => a.distance - b.distance);

      if (jobsWithDistance.length > 0) {
        return NextResponse.json({ jobs: jobsWithDistance, city }, {
          headers: {
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
          }
        });
      }
    } catch (staticErr) {
      console.warn('Could not read static jobs DB:', staticErr);
    }

    // Fallback: If no static jobs found, generate some mock ones as absolute fallback
    const fallbackJobs = generateJobsNearCoordinates(lat, lng, city);
    return NextResponse.json({ jobs: fallbackJobs, city }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600'
      }
    });

  } catch (error) {
    console.error('Fatal jobs API error, fallback activated:', error);
    const fallbackJobs = generateJobsNearCoordinates(lat, lng, city);
    return NextResponse.json({ jobs: fallbackJobs, city }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600'
      }
    });
  }
}

