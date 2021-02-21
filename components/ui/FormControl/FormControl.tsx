import styled from "styled-components";

const FormControl = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.spacingRem(2)};
  }
`;

export default FormControl;
