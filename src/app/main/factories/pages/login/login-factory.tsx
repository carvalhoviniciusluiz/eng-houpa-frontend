import { Login } from "~/app/presentation/pages"
import { makeLoginValidation } from "./login-validation-factory"


export const makeLogin = () => {
  return (
    <Login
      validation={makeLoginValidation()}
    />
  )
}
