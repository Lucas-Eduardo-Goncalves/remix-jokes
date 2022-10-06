import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import type { IAuthActionData } from "../types/IAuthActionData";

import {
  validatePassword,
  validateUrl,
  validateUsername,
} from "../validations";
import { createUserSession, login, register } from "~/utils/session.server";
import { db } from "~/utils/db.server";

const badRequest = (data: IAuthActionData) => json(data, { status: 400 });

export const AuthAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");

  const redirectTo = validateUrl(form.get("redirectTo") || "/jokes");

  if (
    typeof loginType !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { loginType, username, password };

  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  switch (loginType) {
    case "login": {
      const user = await login({ username, password });
      if (!user) {
        return badRequest({
          fields,
          formError: `Username/Password combination is incorrect`,
        });
      }
      return createUserSession(user.id, redirectTo);
    }

    case "register": {
      const userExists = await db.user.findFirst({
        where: { username },
      });

      if (userExists) {
        return badRequest({
          fields,
          formError: `User with username ${username} already exists`,
        });
      }

      const user = await register({ username, password });

      if (!user) {
        return badRequest({
          fields,
          formError: `Something went wrong trying to create a new user.`,
        });
      }

      return createUserSession(user.id, redirectTo);
    }

    default: {
      return badRequest({
        fields,
        formError: `Login type invalid`,
      });
    }
  }
};
