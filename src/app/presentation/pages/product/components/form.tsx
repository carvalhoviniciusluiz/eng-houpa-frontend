import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Control } from "react-hook-form";
import { TextField } from "~/app/presentation/components";

type FormProductProps = {
  isSubmitting: boolean;
  handleSubmit: any;
  control: Control<any, any>;
  title: string;
}

export default function FormProduct({
  isSubmitting,
  handleSubmit,
  control,
  title
}: FormProductProps) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <form
        style={{
          width: 571,
          justifyContent: "center"
        }}
        onSubmit={handleSubmit}
      >
        <Box
          style={{
            margin: "72px 0 73px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            style={{
              fontSize: 24
            }}
          >
            {title}
          </Typography>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              height: 40,
              backgroundColor: "#3F0B6D",
              border: 0,
              borderRadius: 4,
              padding: "0 24px 0 17px"
            }}
            disabled={isSubmitting}
          >
            <Image
              width={16}
              height={16}
              src="/img/save.svg"
              alt="action"
            />
            <span
              style={{
                marginLeft: 13,
                color: "white"
              }}
            >
              Salvar produto
            </span>
          </button>
        </Box>

        <Box
          style={{
            marginTop: 57,
            marginBottom: 25,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Image
            width={23.16}
            height={24.41}
            src="/img/dress.svg"
            alt="image"
          />

          <Typography
            style={{
              fontSize: 14,
              marginLeft: 8,
              color: "#3F0B6D"
            }}
          >
            Informações do Produto
          </Typography>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Box
            style={{
              height: 40 + 78,
              width: 308
            }}
          >
            <label htmlFor="password">
              Nome do produto
              <span>*</span>
            </label>
            <TextField
              style={{
                marginTop: 7
              }}
              control={control}
              name="name"
              variant="outlined"
            />
          </Box>

          <Box
            style={{
              height: 40 + 78,
              width: 196
            }}
          >
            <label htmlFor="ref">
              Referência
            </label>
            <TextField
              style={{
                marginTop: 7
              }}
              control={control}
              name="ref"
              variant="outlined"
            />
          </Box>
        </Box>

        <Box
          style={{
            height: 40 + 78
          }}
        >
          <label htmlFor="price">
            Preço
          </label>
          <TextField
            style={{
              marginTop: 7
            }}
            control={control}
            name="price"
            variant="outlined"
          />
        </Box>

        <Box
          style={{
            height: 101 + 78
          }}
        >
          <label htmlFor="price">
            Descrição da peça
            <span>*</span>
          </label>
          <TextField
            style={{
              marginTop: 7
            }}
            control={control}
            name="description"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
      </form>
    </Box>
  )
}