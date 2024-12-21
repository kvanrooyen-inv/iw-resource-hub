import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'fvzg368t',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-01-01', // use current date in YYYY-MM-DD format
});

// Helper function to get all tools
export async function getTools() {
  return client.fetch(`*[_type == "tool"] | order(order asc)`);
}
