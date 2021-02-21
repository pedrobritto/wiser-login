import styled from "styled-components";

const StyledAlert = styled.div<{ $severity: string }>`
  font-size: ${({ theme }) => theme.pxToRem(14)};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacingRem(1.5, 2)};

  color: #fff;
  border-radius: ${({ theme }) => theme.shape.round};

  background-color: ${({ $severity, theme }) => {
    switch ($severity) {
      case "success":
        return theme.palette.success.main;
      case "error":
        return theme.palette.error.main;
      default:
        return theme.palette.grey.main;
    }
  }};
`;

interface AlertProps {
  severity?: string;
}

const Alert: React.FC<AlertProps> = ({ severity = "success", children }) => {
  return <StyledAlert $severity={severity}>{children}</StyledAlert>;
};

export default Alert;
