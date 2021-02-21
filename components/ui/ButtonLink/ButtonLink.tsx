import React from "react";
import styled from "styled-components";

const StyledButtonLink = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  vertical-align: middle;
  appearance: none;

  width: auto;
  color: inherit;
  transition: ${({ theme }) => theme.transition.default};
  text-decoration: underline;
`;

const ButtonLink: React.FC = (props) => {
  return <StyledButtonLink {...props} />;
};

export default ButtonLink;
