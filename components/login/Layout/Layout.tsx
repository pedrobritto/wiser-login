import styled from "styled-components";

export const LoginSection = styled.main`
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacingRem(0, 4)};

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    background-color: ${({ theme }) => theme.palette.background.light};
    padding: ${({ theme }) => theme.spacingRem(0, 3)};
  }
`;

export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  max-width: calc(300px + ${({ theme }) => theme.spacingPx(6)});

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    max-width: 300px;
  }

  ${({ theme }) => theme.breakpoints.up("desktop")} {
    margin-left: ${({ theme }) => theme.spacingRem(10)};
  }
`;

export const LoginCard = styled.div`
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    background-color: ${({ theme }) => theme.palette.background.light};
    border-radius: ${({ theme }) => theme.shape.round};
    padding: ${({ theme }) => theme.spacingRem(3, 3, 0)};
    margin-top: ${({ theme }) => theme.spacingRem(4)};
  }
`;

export const LoginGrid = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.dark};

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  }
`;

export const LoginAsideImageContainer = styled.aside`
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.gradients.background.from},
      ${({ theme }) => theme.gradients.background.to}
    );
  }
`;
