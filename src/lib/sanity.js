import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2025-04-01', // use current date in YYYY-MM-DD format
});

// Helper function to get all tools
export async function getTools() {
  return client.fetch(`*[_type == "tool"] | order(order asc)`);
}
