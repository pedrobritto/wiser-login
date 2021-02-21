import styled from "styled-components";

const StyledFormError = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: ${({ theme }) => theme.spacingRem(1)};
`;

const FormError: React.FC<{ message: string | null }> = ({ message }) => {
  if (message) {
    return <StyledFormError>{message}</StyledFormError>;
  }

  return null;
};

export default FormError;
