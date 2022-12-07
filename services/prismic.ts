import * as Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  // const endpoint = Prismic.getEndpoint(process.env.PRISMIC_API_ENDPOINT as string);
  const client = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT as string, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return client;
}