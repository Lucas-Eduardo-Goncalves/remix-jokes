import { useCatch } from "@remix-run/react";
import { RootDocument } from "../view";

export function RootCatchBoundary() {
  const caught = useCatch();

  return (
    <RootDocument title={`${caught.status} ${caught.statusText}`}>
      <div className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </RootDocument>
  );
}
