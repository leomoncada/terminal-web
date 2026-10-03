import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import ProfileSummary from "./components/ProfileSummary";
import { LangProvider } from "./i18n/LangContext";

function App() {
  const { theme, themeLoaded } = useTheme();

  useEffect(() => {
    window.addEventListener(
      "keydown",
      e => {
        ["ArrowUp", "ArrowDown"].indexOf(e.code) > -1 && e.preventDefault();
      },
      false
    );
  }, []);

  return (
    <LangProvider>
      <h1 className="sr-only" aria-label="Leomar Moncada - Terminal Portfolio">
        Leomar Moncada - Terminal Portfolio
      </h1>
      <ProfileSummary />
      {themeLoaded && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Terminal />
        </ThemeProvider>
      )}
    </LangProvider>
  );
}

export default App;
