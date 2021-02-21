import Head from "next/head";
import Container from "@/components/ui/Container/Container";
import LoginForm from "@/components/login/LoginForm/LoginForm";

import styled from "styled-components";

const LoginCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background.light};
  border-radius: ${({ theme }) => theme.shape.round};
  padding: ${({ theme }) => theme.spacingRem(3, 3, 0)};
`;

function Login() {
  return (
    <>
      <Head>
        <title>Wiser Platform - Login</title>
      </Head>

      <main
        css={({ theme }) => ({
          backgroundColor: theme.palette.background.dark,
          height: "100vh",
        })}
      >
        <Container>
          <LoginCard>
            <LoginForm />
          </LoginCard>
        </Container>
      </main>
    </>
  );
}

export default Login;
