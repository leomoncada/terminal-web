import { useEffect, useState } from "react";
import darkTheme from "../components/styles/themes";

export const useTheme = () => {
  const [theme] = useState(darkTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded };
};
