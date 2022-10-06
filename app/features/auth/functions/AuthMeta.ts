import type { MetaFunction } from "@remix-run/node";

export const AuthMeta: MetaFunction = () => {
  return {
    title: "Remix Jokes | Login",
    description: "Login to submit your own jokes to Remix Jokes!",
  };
};
