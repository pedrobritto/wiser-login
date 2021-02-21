import styled, { css } from "styled-components";

interface StyledButtonProps {
  $elevation?: boolean;
  $uppercase?: boolean;
  $loading?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  border: 0;
  margin: 0;
  padding: ${({ theme }) => theme.spacingPx(0, 3)};
  height: 48px;
  cursor: pointer;
  vertical-align: middle;
  appearance: none;

  color: inherit;
  text-decoration: none;

  width: auto;
  border-radius: ${({ theme }) => theme.shape.round};
  transition: box-shadow ${({ theme }) => theme.transition.default},
    opacity ${({ theme }) => theme.transition.default},
    color ${({ theme }) => theme.transition.default};

  font-size: ${({ theme }) => theme.typography.button.fontSize};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};

  color: #fff;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.gradients.default.from},
    ${({ theme }) => theme.gradients.default.to}
  );

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  ${({ $elevation }) =>
    $elevation &&
    css`
      :hover {
        box-shadow: 0px 2px 6px 0px #cf99dbaa;
      }

      box-shadow: 0px 10px 25px 0px #cf99db;
    `}

  ${({ $uppercase }) =>
    $uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ $loading }) =>
    $loading &&
    css`
      color: transparent !important;
      cursor: wait;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: ${({ theme }) => theme.spacingRem(3)};
  height: ${({ theme }) => theme.spacingRem(3)};
  position: relative;
  display: inline-block;

  border: 2px solid;
  border-radius: 50%;
  border-color: #fff;
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  uppercase?: boolean;
  elevation?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  disabled = false,
  loading = false,
  fullWidth = false,
  uppercase = true,
  elevation = true,
  children,
  ...props
}) => {
  return (
    <StyledButton
      $loading={loading}
      $uppercase={uppercase}
      $elevation={elevation}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      {...props}
    >
      {loading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
