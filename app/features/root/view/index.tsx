import { Links, LiveReload, Meta, Scripts } from "@remix-run/react";
import type { IDocumentProps } from "../types/IDocument";

export function RootDocument({ title, children }: IDocumentProps) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
