import { Link } from "@remix-run/react";

export function AuthFormFooter() {
  return (
    <div className="links">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jokes">Jokes</Link>
        </li>
      </ul>
    </div>
  );
}
