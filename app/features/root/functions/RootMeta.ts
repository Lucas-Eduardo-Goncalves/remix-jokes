import type { MetaFunction } from "@remix-run/node";

export const RootMeta: MetaFunction = () => {
  const description = `Learn Remix and laugh at the same time!`;

  return {
    charset: "utf-8",
    description,
    keywords: "Remix,jokes",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@remix_run",
    "twitter:site": "@remix_run",
    "twitter:title": "Remix Jokes",
    "twitter:description": description,
  };
};
