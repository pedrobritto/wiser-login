import styled, { css } from "styled-components";

const FormInput = styled.input<{ hasError?: string | boolean }>`
  appearance: none;

  font-size: 12px;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.light};

  width: 100%;
  height: ${({ theme }) => theme.pxToRem(48)};
  padding: ${({ theme }) => theme.spacingRem(2)};

  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.shape.round};
  transition: box-shadow ${({ theme }) => theme.transition.default};

  outline: 0;

  :focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.primary.light}aa;
  }

  ::placeholder {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.palette.error.main};

      :focus {
        box-shadow: 0 0 0 3px ${theme.palette.error.main}55;
      }
    `}
`;

export default FormInput;
