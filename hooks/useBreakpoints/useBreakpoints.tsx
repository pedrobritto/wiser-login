import { theme } from "@/theme";
import useMediaQuery from "../useMediaQuery";

interface useBreakpointsReturn {
  isPhoneUp: boolean;
  isTabletUp: boolean;
  isDesktopUp: boolean;
}

const useBreakpoints = (): useBreakpointsReturn => {
  const isPhoneUp = useMediaQuery(theme.breakpoints.upQueryOnly("phone"));
  const isTabletUp = useMediaQuery(theme.breakpoints.upQueryOnly("tablet"));
  const isDesktopUp = useMediaQuery(theme.breakpoints.upQueryOnly("desktop"));

  return {
    isPhoneUp,
    isTabletUp,
    isDesktopUp,
  };
};

export default useBreakpoints;
