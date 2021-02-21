import Head from "next/head";
import Image from "next/image";

import useBreakpoints from "@/hooks/useBreakpoints";

import LoginForm from "@/components/login/LoginForm";
import {
  LoginSection,
  LoginCardContainer,
  LoginCard,
  LoginGrid,
  LoginAsideImageContainer,
} from "@/components/login/Layout";
import ForgotPassword from "@/components/login/ForgotPassword";

function Login() {
  const { isTabletUp } = useBreakpoints();

  return (
    <>
      <Head>
        <title>Wiser Platform - Login</title>
      </Head>

      <LoginGrid>
        <LoginAsideImageContainer>
          {isTabletUp ? (
            <Image
              src="/images/bg@2x.jpg"
              layout="fill"
              objectFit="cover"
              alt="Foto de uma mulher utilizando um computador."
            />
          ) : (
            <Image
              src="/images/bg@2x.jpg"
              layout="responsive"
              objectFit="cover"
              height={500}
              width={500}
              alt="Foto de uma mulher utilizando um computador."
            />
          )}
        </LoginAsideImageContainer>

        <LoginSection>
          <LoginCardContainer>
            <LoginCard>
              <LoginForm />
            </LoginCard>

            <ForgotPassword />
          </LoginCardContainer>
        </LoginSection>
      </LoginGrid>
    </>
  );
}

export default Login;
