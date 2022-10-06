import { AuthAction, AuthLinks, AuthMeta, AuthView } from "~/features/auth";

export const links = AuthLinks;
export const meta = AuthMeta;
export const action = AuthAction;

export default function () {
  return <AuthView />;
}
