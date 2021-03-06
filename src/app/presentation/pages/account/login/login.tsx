import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Authentication } from '~/app/domain/usecases';
import { Link, PasswordField, TextField } from '~/app/presentation/components';

type LoginProps = {
  validation: any;
  authentication: Authentication
}

export default function Login({ validation, authentication }: LoginProps) {
  const { control, handleSubmit, formState } = useForm<Authentication.Params>(validation);

  const router = useRouter();

  async function onSubmit(params: Authentication.Params) {
    authentication.signIn(params)
      .then(() => {
        router.push('/')
      })
      .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Typography
        component="h1"
        style={{
          marginBottom: 48,
          fontSize: 24
        }}
      >
        Entrar no houpa!
      </Typography>

      <Box
        style={{
          height: 49 + 78
        }}
      >
        <label htmlFor="name">E-mail</label>
        <TextField
          style={{
            marginTop: 8
          }}
          label="Digite seu e-mail"
          name="email"
          control={control}
        />
      </Box>

      <Box
        style={{
          height: 149 + 78
        }}
      >
        <label htmlFor="password">Senha</label>
        <PasswordField
          style={{
            marginTop: 8
          }}
          label="Digite sua senha"
          name="password"
          control={control}
        />
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Button
          type="submit"
          style={{
            color: "white",
            width: 200,
            height: 56,
            marginBottom: 40,
            backgroundColor: "#3F0B6D"
          }}
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting && <span />}
          Login
        </Button>

        <Typography
          component="span"
          style={{
            fontSize: 14,
            lineHeight: '120%',
            letterSpacing: 0.2
          }}
        >
          Ainda n??o tem conta?
        </Typography>
        <Link
          style={{
            margin: '8px 0',
            fontSize: 16
          }}
          href="/account/register"
        >
          Cadastre-se
        </Link>
      </Box>
    </form>
  )
}