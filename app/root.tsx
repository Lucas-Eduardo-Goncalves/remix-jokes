import { Outlet } from "@remix-run/react";

import {
  RootLinks,
  RootMeta,
  RootCatchBoundary,
  RootErrorBoundary,
  RootDocument,
} from "./features/root";

export const links = RootLinks;
export const meta = RootMeta;
export const CatchBoundary = RootCatchBoundary;
export const ErrorBoundary = RootErrorBoundary;

export default function App() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}
