import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "5z6b0ok7", // hier deine echte projectId eintragen
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-08-12",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
