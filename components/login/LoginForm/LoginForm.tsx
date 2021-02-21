import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema, FormType } from "@/forms/login";

import Button from "@/components/ui/Button";
import FormControl from "@/components/ui/FormControl";
import FormError from "@/components/ui/FormError";
import FormInput from "@/components/ui/FormInput";
import FormLabel from "@/components/ui/FormLabel";
import useBreakpoints from "@/hooks/useBreakpoints";

const LoginTitle = styled.h2`
  font-size: ${({ theme }) => theme.pxToRem(24)};
  font-weight: 400;
  line-height: 1.4;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    font-size: ${({ theme }) => theme.pxToRem(40)};
    line-height: 1.2;
  }
`;

const LoginSubtitle = styled.div`
  font-size: ${({ theme }) => theme.pxToRem(12)};
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.primary.light};
  margin-top: ${({ theme }) => theme.spacingRem(2)};

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    font-size: ${({ theme }) => theme.pxToRem(16)};
  }
`;

const LoginHeader = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacingRem(2)};

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    text-align: left;
    max-width: 250px;
  }
`;

// -----------------------------------------------------------------------------

const FormButtonContainer = styled.div`
  text-align: center;
  transform: translateY(${({ theme }) => theme.spacingRem(3)});
  max-width: ${({ theme }) => theme.pxToRem(170)};
  margin: auto;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    max-width: 100%;
  }
`;

// -----------------------------------------------------------------------------

const LoginForm: React.FC = () => {
  const { isTabletUp } = useBreakpoints();

  const { register, errors, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  });

  return (
    <div>
      <LoginHeader>
        <LoginTitle>
          Olá, seja
          <br /> bem-vindo!
        </LoginTitle>

        <LoginSubtitle>
          Para acessar a plataforma, faça seu login.
        </LoginSubtitle>
      </LoginHeader>

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
          <Button type="submit" fullWidth elevation={isTabletUp}>
            Entrar
          </Button>
        </FormButtonContainer>
      </form>
    </div>
  );
};

export default LoginForm;
