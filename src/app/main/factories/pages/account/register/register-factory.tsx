import { makeRemoteRegister } from "~/app/main/factories/usecases"
import { Register } from "~/app/presentation/pages"
import { makeRegisterValidation } from "./register-validation-factory"


export const makeRegister = () => {
  return (
    <Register
      validation={makeRegisterValidation()}
      register={makeRemoteRegister()}
    />
  )
}
