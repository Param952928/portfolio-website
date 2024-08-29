import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2023-03-15", // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
