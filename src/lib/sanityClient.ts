import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-05-30",
    useCdn: true,
  });

  const builder = ImageUrlBuilder(client);

  export const urlFor = (source: any) => builder.image(source);