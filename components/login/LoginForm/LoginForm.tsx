import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema, FormType } from "@/forms/login";

import Button from "@/components/ui/Button/Button";
import FormControl from "@/components/ui/FormControl";
import FormError from "@/components/ui/FormError";
import FormInput from "@/components/ui/FormInput";
import FormLabel from "@/components/ui/FormLabel";

const Title = styled.h2`
  font-size: ${({ theme }) => theme.pxToRem(24)};
  font-weight: 400;
  line-height: 1.4;
`;

const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.pxToRem(14)};
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.primary.light};
`;

// -----------------------------------------------------------------------------

const FormButtonContainer = styled.div`
  text-align: center;
  transform: translateY(${({ theme }) => theme.spacingRem(3)});
  max-width: ${({ theme }) => theme.pxToRem(170)};
  margin: auto;
`;

const FormContainer = styled.div`
  max-width: 260;
  margin: auto;
`;

// -----------------------------------------------------------------------------

const LoginForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  });

  return (
    <FormContainer>
      <header css={{ textAlign: "center" }}>
        <div
          css={({ theme }) => ({
            marginBottom: theme.spacingRem(2),
          })}
        >
          <Title>
            Olá, seja
            <br /> bem-vindo!
          </Title>
        </div>

        <div
          css={({ theme }) => ({
            marginBottom: theme.spacingRem(2),
          })}
        >
          <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
        </div>
      </header>

      <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
        <FormControl>
          <FormLabel htmlFor="input-email">E-mail</FormLabel>
          <FormInput
            ref={register}
            id="input-email"
            name="email"
            type="email"
            hasError={errors?.email?.message}
          />
          <FormError message={errors?.email?.message} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="input-password">Senha</FormLabel>
          <FormInput
            ref={register}
            id="input-password"
            name="password"
            type="password"
            hasError={errors?.password?.message}
          />
          <FormError message={errors?.password?.message} />
        </FormControl>

        <FormButtonContainer>
          <Button type="submit" fullWidth>
            Entrar
          </Button>
        </FormButtonContainer>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
