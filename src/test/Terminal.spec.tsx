import { describe, it, expect, vi } from "vitest";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { render, screen, userEvent } from "../utils/test-utils";
import Terminal, { commands } from "../components/Terminal";

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const allCmds = commands.map(cmdObj => cmdObj.cmd);

describe("Terminal Component", () => {
  let terminalInput: HTMLInputElement;
  let user: UserEvent;

  beforeEach(() => {
    const termSetup = setup(<Terminal />);
    user = termSetup.user;
    terminalInput = screen.getByTitle("terminal-input");
  });

  describe("Input Features & Initial State", () => {
    it("should display welcome cmd by default", () => {
      expect(screen.getByTestId("input-command").textContent).toBe("welcome");
    });

    it("should change input value", async () => {
      await user.type(terminalInput, "demo");
      expect(terminalInput.value).toBe("demo");
    });

    it("should clear input value when click enter", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Input Commands", () => {
    it("should return 'command not found' when input value is invalid", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(screen.getByTestId("not-found-0").innerHTML).toBe(
        "command not found: demo"
      );
    });

    it("should render Welcome component when user type 'welcome' cmd", async () => {
      await user.type(terminalInput, "clear{enter}");
      await user.type(terminalInput, "welcome{enter}");
      expect(screen.getByTestId("welcome")).toBeInTheDocument();
    });

    const testCmds = [
      "about",
      "contact",
      "experience",
      "help",
      "history",
      "lang",
      "projects",
      "skills",
    ];
    testCmds.forEach(cmd => {
      it(`should render ${cmd} component when user type '${cmd}' cmd`, async () => {
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(screen.getByTestId(`${cmd}`)).toBeInTheDocument();
      });
    });

    it("should display cmd history when user type 'history' cmd", async () => {
      await user.type(terminalInput, "about{enter}");
      await user.type(terminalInput, "history{enter}");

      const commands =
        screen.getByTestId("latest-output").firstChild?.childNodes;

      expect(commands?.length).toBe(3);

      const typedCommands: string[] = [];
      commands?.forEach(cmd => {
        typedCommands.push(cmd.textContent || "");
      });

      expect(typedCommands).toEqual(["welcome", "about", "history"]);
    });

    it("should clear everything when user type 'clear' cmd", async () => {
      await user.type(terminalInput, "clear{enter}");
      expect(screen.queryAllByTestId("input-command")).toHaveLength(0);
    });
  });

  describe("Invalid Arguments", () => {
    const usageCmds = allCmds.filter(cmd => cmd !== "clear" && cmd !== "lang");

    usageCmds.forEach(cmd => {
      it(`should return usage component for ${cmd} cmd with invalid arg`, async () => {
        await user.type(terminalInput, `${cmd} sth{enter}`);
        expect(screen.getByTestId("usage-output").innerHTML).toBe(
          `Usage: ${cmd}`
        );
      });
    });
  });

  describe("Keyboard shortcuts", () => {
    allCmds.forEach(cmd => {
      it(`should autocomplete '${cmd}' when 'Tab' is pressed`, async () => {
        await user.type(terminalInput, cmd.slice(0, 2));
        await user.tab();
        expect(terminalInput.value).toBe(cmd);
      });
    });

    allCmds.forEach(cmd => {
      it(`should autocomplete '${cmd}' when 'Ctrl + i' is pressed`, async () => {
        await user.type(terminalInput, cmd.slice(0, 2));
        await user.keyboard("{Control>}i{/Control}");
        expect(terminalInput.value).toBe(cmd);
      });
    });

    it("should clear when 'Ctrl + l' is pressed", async () => {
      await user.type(terminalInput, "history{enter}");
      await user.keyboard("{Control>}l{/Control}");
      expect(screen.queryAllByTestId("input-command")).toHaveLength(0);
    });

    it("should go to previous back and forth when 'Up & Down Arrow' is pressed", async () => {
      await user.type(terminalInput, "about{enter}");
      await user.type(terminalInput, "skills{enter}");
      await user.type(terminalInput, "contact{enter}");
      await user.keyboard("{arrowup>3}");
      expect(terminalInput.value).toBe("about");
      await user.keyboard("{arrowup}");
      expect(terminalInput.value).toBe("welcome");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("about");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("skills");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("contact");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Language", () => {
    it("should default to English and report it with 'lang'", async () => {
      await user.type(terminalInput, "lang{enter}");
      expect(screen.getByTestId("lang")).toHaveTextContent(
        "Current language: English"
      );
      expect(document.documentElement.lang).toBe("en");
    });

    it("should switch to Spanish with 'lang es' and remember it", async () => {
      await user.type(terminalInput, "lang es{enter}");
      expect(screen.getByTestId("lang")).toHaveTextContent(
        "Idioma cambiado a español"
      );
      await user.type(terminalInput, "help{enter}");
      expect(screen.getByTestId("help")).toHaveTextContent(
        "lista los comandos disponibles"
      );
      expect(document.documentElement.lang).toBe("es");
      expect(localStorage.getItem("lang")).toBe("es");
    });

    it("should show usage for an unknown language", async () => {
      await user.type(terminalInput, "lang fr{enter}");
      expect(screen.getByTestId("usage-output").innerHTML).toBe(
        "Usage: lang [en | es]"
      );
    });
  });

  describe("Contact", () => {
    it("should list email, LinkedIn, GitHub and a translated location", async () => {
      await user.type(terminalInput, "contact{enter}");
      const contact = screen.getByTestId("contact");
      expect(contact).toHaveTextContent("leomarmoncadah@gmail.com");
      expect(contact).toHaveTextContent("github.com/leomoncada");
      expect(contact).toHaveTextContent("Location:Málaga, Spain");
      await user.type(terminalInput, "lang es{enter}");
      expect(screen.getByTestId("contact")).toHaveTextContent(
        "Ubicación:Málaga, España"
      );
    });
  });

  describe("Easter eggs", () => {
    const eggs: [string, string][] = [
      ["sudo rm -rf /", "not in the sudoers file"],
      ["whoami", "who Leomar is"],
      ["ls", "experience.log"],
      ["kubectl get pods", "Running"],
      ["kubectl delete pod", 'Try "kubectl get pods"'],
      ["terraform plan", "Plan: 1 to add"],
      ["terraform apply", "Apply complete!"],
      ["terraform destroy", "Usage: terraform [plan | apply]"],
      ["rm -rf /", "least-privilege IAM"],
      ["exit", "Leaving so soon?"],
    ];
    eggs.forEach(([input, expected]) => {
      it(`should answer '${input}'`, async () => {
        await user.type(terminalInput, `${input}{enter}`);
        expect(screen.getByTestId("latest-output")).toHaveTextContent(expected);
      });
    });

    it("should keep hidden commands out of help and autocomplete", async () => {
      await user.type(terminalInput, "help{enter}");
      expect(screen.getByTestId("help")).not.toHaveTextContent("kubectl");
      await user.type(terminalInput, "ku");
      await user.tab();
      expect(terminalInput.value).toBe("ku");
    });
  });

  describe("Command menu", () => {
    it("should be hidden until the toggle is clicked", async () => {
      expect(screen.queryByTestId("command-menu")).not.toBeInTheDocument();
      await user.click(screen.getByTestId("menu-toggle"));
      expect(screen.getByTestId("command-menu")).toBeInTheDocument();
      expect(localStorage.getItem("menu")).toBe("on");
      await user.click(screen.getByTestId("menu-toggle"));
      expect(screen.queryByTestId("command-menu")).not.toBeInTheDocument();
      expect(localStorage.getItem("menu")).toBe("off");
    });

    it("should run a command when a menu item is clicked", async () => {
      await user.click(screen.getByTestId("menu-toggle"));
      await user.click(screen.getByRole("button", { name: "experience" }));
      expect(screen.getByTestId("experience")).toBeInTheDocument();
      // echoed in the history as if it had been typed
      expect(screen.getAllByTestId("input-command")[0].textContent).toBe(
        "experience"
      );
    });

    it("should switch language from the menu", async () => {
      await user.click(screen.getByTestId("menu-toggle"));
      await user.click(screen.getByRole("button", { name: "español" }));
      expect(screen.getByTestId("lang")).toHaveTextContent(
        "Idioma cambiado a español"
      );
      expect(screen.getByRole("button", { name: "english" })).toBeVisible();
    });
  });

  describe("Accessibility", () => {
    it("should let Tab leave an empty prompt", async () => {
      expect(terminalInput).toHaveFocus();
      await user.tab();
      expect(terminalInput).not.toHaveFocus();
    });
  });
});

describe("Browser language detection", () => {
  it("should start in Spanish for a Spanish browser", () => {
    const spy = vi.spyOn(navigator, "language", "get").mockReturnValue("es-ES");
    setup(<Terminal />);
    expect(screen.getByTestId("welcome")).toHaveTextContent(
      "Bienvenido a mi portfolio en terminal"
    );
    spy.mockRestore();
  });
});
