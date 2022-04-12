import { Register } from "~/app/presentation/pages"
import { makeRemoteRegister } from "../../usecases"
import { makeRegisterValidation } from "./register-validation-factory"


export const makeRegister = () => {
  return (
    <Register
      validation={makeRegisterValidation()}
      register={makeRemoteRegister()}
    />
  )
}
