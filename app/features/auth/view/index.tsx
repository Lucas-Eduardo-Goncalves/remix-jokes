import { AuthForm } from "./AuthForm";
import { AuthFormFooter } from "./AuthFormFooter";

export function AuthView() {
  return (
    <div className="container">
      <div className="content">
        <h1>Login</h1>
        <AuthForm />
      </div>

      <AuthFormFooter />
    </div>
  );
}
