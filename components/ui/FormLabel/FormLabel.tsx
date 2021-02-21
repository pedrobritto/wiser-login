import styled from "styled-components";

const FormLabel = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  margin: ${({ theme }) => theme.spacingRem(0, 0, 1, 1.5)};
`;

export default FormLabel;
