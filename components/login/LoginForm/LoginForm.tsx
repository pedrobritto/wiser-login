import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema, FormType } from "@/forms/login";
import useBreakpoints from "@/hooks/useBreakpoints";

import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import FormControl from "@/components/ui/FormControl";
import FormError from "@/components/ui/FormError";
import FormInput from "@/components/ui/FormInput";
import FormLabel from "@/components/ui/FormLabel";
import {
  useAuthCalled,
  useAuthLoading,
  useAuthSuccess,
  useLogin,
} from "@/store/state/auth-slice";

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

const FormButtonContainer = styled.div`
  text-align: center;
  transform: translateY(${({ theme }) => theme.spacingRem(3)});
  max-width: ${({ theme }) => theme.pxToRem(170)};
  margin: auto;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    max-width: 100%;
  }
`;

const FormAlertContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 1rem;

  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    justify-content: flex-end;
  }
`;

// -----------------------------------------------------------------------------

const LoginForm: React.FC = () => {
  const { isTabletUp } = useBreakpoints();

  const onSubmit = useLogin();
  const authLoading = useAuthLoading();
  const authSuccess = useAuthSuccess();
  const authCalled = useAuthCalled();

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

      {authCalled && !authLoading && (
        <FormAlertContainer>
          {authSuccess ? (
            <Alert>Login efetuado com sucesso!</Alert>
          ) : (
            <Alert severity="error">E-mail ou senha incorretos.</Alert>
          )}
        </FormAlertContainer>
      )}

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
          <Button loading={authLoading} fullWidth elevation={isTabletUp}>
            Entrar
          </Button>
        </FormButtonContainer>
      </form>
    </div>
  );
};

export default LoginForm;
