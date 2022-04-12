import { makeRemoteAuthenticationDecorator } from "~/app/main/factories/decorators";
import { Login } from "~/app/presentation/pages";
import { makeLoginValidation } from "./login-validation-factory";

export const makeLogin = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthenticationDecorator()}
    />
  )
}
