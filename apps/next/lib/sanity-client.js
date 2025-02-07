/* eslint-disable @typescript-eslint/no-var-requires */
const sanityClient = require('@sanity/client');

const client = sanityClient({
  apiVersion: '2021-08-31',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a8wotfx4',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || ''
});

module.exports = client;
