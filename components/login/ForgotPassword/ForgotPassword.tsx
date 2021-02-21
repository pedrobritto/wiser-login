import Link from "next/link";
import styled from "styled-components";

import { theme } from "@/theme";
import useBreakpoints from "@/hooks/useBreakpoints";

import ButtonLink from "@/components/ui/ButtonLink";

const ForgotPasswordContainer = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.pxToRem(14)};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacingRem(6)};

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    color: ${({ theme }) => theme.palette.primary.light};
    margin-top: ${({ theme }) => theme.spacingRem(8)};
  }
`;

const ForgotPassword = () => {
  const { isTabletUp } = useBreakpoints();

  return (
    <ForgotPasswordContainer>
      Esqueceu seu login ou senha?
      <br />
      Clique{" "}
      <Link href="/forgot-password">
        <a aria-label="Link para recuperar senha.">
          <ButtonLink
            css={{ color: isTabletUp && theme.palette.secondary.main }}
            tabIndex={-1}
          >
            aqui
          </ButtonLink>
        </a>
      </Link>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
