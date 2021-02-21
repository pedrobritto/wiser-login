import styled, { css } from "styled-components";

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacingRem(0, 2)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: ${({ theme }) => theme.spacingRem(0, 3)};
  }

  ${({ theme, $size }) => {
    const gutterOffset = 24 * 2;

    switch ($size) {
      case "xl": {
        return css`
          max-width: ${theme.pxToRem(1440 + gutterOffset)};
        `;
      }

      case "lg": {
        return css`
          max-width: ${theme.pxToRem(1300 + gutterOffset)};
        `;
      }

      case "sm": {
        return css`
          max-width: ${theme.pxToRem(1100 + gutterOffset)};
        `;
      }

      default: {
        return css`
          max-width: ${theme.pxToRem(1200 + gutterOffset)};
        `;
      }
    }
  }}

  ${({ theme, $padding, noPadding }) => {
    if (noPadding) {
      return css`
        padding-left: 0;
        padding-right: 0;
      `;
    }

    switch ($padding) {
      case "sm": {
        return css`
          padding-left: ${theme.spacingPx(2)};
          padding-right: ${theme.spacingPx(2)};
        `;
      }

      default: {
        return css`
          padding-left: ${theme.spacingPx(3)};
          padding-right: ${theme.spacingPx(3)};
        `;
      }
    }
  }}
`;

const ContentContainer = ({ size = "md", ...props }) => {
  return <StyledContentContainer $size={size} {...props} />;
};

export default ContentContainer;
