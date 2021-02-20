import styled, { css } from "styled-components";

// It'd be great if the reset styles could be shared between variants.
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  border: 0;
  margin: 0;
  /* padding: ${({ theme }) => theme.spacingPx(0, 2)}; */
  padding: 0 16px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  color: inherit;
  text-decoration: none;

  width: auto;
  border-radius: 4px;
  transition: 0.2s;

  /* ${({ theme }) => theme.typography.button} */

  :disabled {
    background: #666;
    color: #fff;
    cursor: not-allowed;
  }

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
  width: 32px;
  height: 32px;
  position: relative;
  display: inline-block;

  border: 2px solid;
  border-radius: 50%;
  border-color: #666;
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

const Button = ({ disabled, loading, fullWidth, children, ...props }) => {
  return (
    <StyledButton
      $loading={loading}
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
