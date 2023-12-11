import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "1qp1hm21",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
