import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { Input } from "~/components/Input";
import type { IAuthActionData } from "../types/IAuthActionData";

export function AuthForm() {
  const actionData = useActionData<IAuthActionData>();
  const [searchParams] = useSearchParams();

  return (
    <Form method="post">
      <input
        type="hidden"
        name="redirectTo"
        value={searchParams.get("redirectTo") ?? undefined}
      />

      <fieldset>
        <legend className="sr-only">Login or Register?</legend>
        <label>
          <input
            type="radio"
            name="loginType"
            value="login"
            defaultChecked={
              !actionData?.fields?.loginType ||
              actionData?.fields?.loginType === "login"
            }
          />{" "}
          Login
        </label>

        <label>
          <input
            type="radio"
            name="loginType"
            value="register"
            defaultChecked={actionData?.fields?.loginType === "register"}
          />{" "}
          Register
        </label>
      </fieldset>

      <Input
        id="username-input"
        labelName="Username"
        name="username"
        type="text"
        error={actionData?.fieldErrors?.username}
        defaultValue={actionData?.fields?.username}
        aria-invalid={Boolean(actionData?.fieldErrors?.username)}
        aria-errormessage={
          actionData?.fieldErrors?.username ? "username-error" : undefined
        }
      />

      <Input
        id="password-input"
        labelName="Password"
        name="password"
        type="password"
        error={actionData?.fieldErrors?.password}
        defaultValue={actionData?.fields?.password}
        aria-invalid={Boolean(actionData?.fieldErrors?.password)}
        aria-errormessage={
          actionData?.fieldErrors?.password ? "password-error" : undefined
        }
      />

      <div id="form-error-message">
        {actionData?.formError ? (
          <p className="form-validation-error" role="alert">
            {actionData.formError}
          </p>
        ) : null}
      </div>

      <button type="submit" className="button">
        Submit
      </button>
    </Form>
  );
}
