import { Controller } from 'react-hook-form'

export const TextField = ({ name, control }: any) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error, invalid } }) => {
        const errorMessage = error?.message
        return (
          <div>
            <label>{name}</label>
            <input
              type="text"
              {...field}
              className={`${invalid ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">
              {errorMessage}
            </div>
          </div>
        )
      }}
    />
  )
}
