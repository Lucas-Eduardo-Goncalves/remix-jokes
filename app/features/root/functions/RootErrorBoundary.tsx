import { RootDocument } from "../view";

export function RootErrorBoundary({ error }: { error: Error }) {
  return (
    <RootDocument title="Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </RootDocument>
  );
}
