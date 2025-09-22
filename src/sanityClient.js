import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "5z6b0ok7",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-08-12",
  token: process.env.SANITY_WRITE_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
