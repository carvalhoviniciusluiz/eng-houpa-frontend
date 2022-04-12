import { Login } from "~/app/presentation/pages";
import { makeAuthenticationDecorator } from "../../decorators/authentication-decorator-factory";
import { makeLoginValidation } from "./login-validation-factory";

export const makeLogin = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeAuthenticationDecorator()}
    />
  )
}
