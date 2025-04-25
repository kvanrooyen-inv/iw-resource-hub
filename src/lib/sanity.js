import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2025-04-01', // use current date in YYYY-MM-DD format
});

export async function getTools() {
  return client.fetch(`
    *[_type == "tool"]{
      _id,
      name,
      description,
      url,
      "categoryId": category._ref
    }
  `);
}

export async function getCategories() {
  return client.fetch(`*[_type == "category"]{
    _id,
    title
  }`);
}
