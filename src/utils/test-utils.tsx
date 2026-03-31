import { cleanup, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach } from "vitest";
import darkTheme from "../components/styles/themes";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
