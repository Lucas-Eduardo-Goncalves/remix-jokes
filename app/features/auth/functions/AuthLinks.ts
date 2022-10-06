import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "../styles/login.css";

export const AuthLinks: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
