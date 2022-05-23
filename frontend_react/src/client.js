import sanityClient from "@sanity/client";
import imageUrlBuiler from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder = imageUrlBuiler(client);

export const urlFor = (source) => builder.image(source);
