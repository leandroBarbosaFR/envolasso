// pages/api/google-reviews.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const place_id = 'ChIJY-1lEwDByRIRhhN-xr3Vxnk'; // Replace with your actual place_id
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=reviews&key=${key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: 'Failed to fetch reviews' });
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
