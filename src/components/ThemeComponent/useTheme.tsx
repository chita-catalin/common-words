import { useState } from "react";
import { useWindowSize } from "../Hooks/useWindowSize";

const useTheme = () => {
  const [light, setLight] = useState<boolean>(true);
  const { width, height } = useWindowSize();
  const mobileBreakpoint: number = 600;
  return { light, setLight, width, height, mobileBreakpoint };
};

export default useTheme;
