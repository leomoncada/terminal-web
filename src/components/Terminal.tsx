import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import CommandMenu, { MenuToggle } from "./CommandMenu";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  TopBar,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab, parseCommand } from "../utils/funcs";
import { commands, hiddenCommands } from "../utils/commands";
import { isLang, useLang } from "../i18n/LangContext";

export { commands, hiddenCommands };

const isKnownCommand = (cmd: string) =>
  _.some(commands, { cmd }) || hiddenCommands.includes(cmd);

const MENU_KEY = "menu";

const loadMenuPref = () => {
  try {
    return localStorage.getItem(MENU_KEY) === "on";
  } catch {
    return false;
  }
};

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  clearHistory?: () => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const latestRef = useRef<HTMLDivElement>(null);
  const { setLang, t } = useLang();

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(loadMenuPref);
  const [scrollToLatest, setScrollToLatest] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const runCommand = (value: string) => {
    const [cmd, ...arg] = parseCommand(value);
    if (cmd === "lang" && arg.length === 1 && isLang(arg[0])) setLang(arg[0]);

    setCmdHistory([value, ...cmdHistory]);
    setInputVal("");
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  // A clicked command shows its output from the top, typed ones keep the
  // terminal pinned to the prompt
  const handleMenuCommand = (value: string) => {
    runCommand(value);
    setScrollToLatest(true);
  };

  useEffect(() => {
    if (!scrollToLatest) return;
    latestRef.current?.scrollIntoView?.({ block: "start" });
    setScrollToLatest(false);
  }, [scrollToLatest]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    try {
      localStorage.setItem(MENU_KEY, next ? "on" : "off");
    } catch {
      // storage unavailable, the toggle lasts for this visit only
    }
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  // focus on input when terminal is clicked, except from the menu so
  // phones don't pop the keyboard on every tap
  const handleDivClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement | null)?.closest?.("[data-menu]")) return;
    inputRef.current && inputRef.current.focus();
  };
  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  // Keyboard Press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // if Tab or Ctrl + I
    // an empty prompt lets Tab move focus on, so keyboard users can leave it
    if ((e.key === "Tab" && inputVal) || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) {
          hintsCmds = [...hintsCmds, cmd];
        }
      });

      const returnedHints = argTab();
      hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

      // if there are many command to autocomplete
      if (hintsCmds.length > 1) {
        setHints(hintsCmds);
      }
      // if only one command to autocomplete
      else if (hintsCmds.length === 1) {
        const currentCmd = _.split(inputVal, " ");
        setInputVal(
          currentCmd.length !== 1
            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
            : hintsCmds[0]
        );

        setHints([]);
      }
    }

    // if Ctrl + L
    if (ctrlL) {
      clearHistory();
    }

    // Go previous cmd
    if (e.key === "ArrowUp") {
      if (pointer >= cmdHistory.length) return;

      if (pointer + 1 === cmdHistory.length) return;

      setInputVal(cmdHistory[pointer + 1]);
      setPointer(prevState => prevState + 1);
      inputRef?.current?.blur();
    }

    // Go next cmd
    if (e.key === "ArrowDown") {
      if (pointer < 0) return;

      if (pointer === 0) {
        setInputVal("");
        setPointer(-1);
        return;
      }

      setInputVal(cmdHistory[pointer - 1]);
      setPointer(prevState => prevState - 1);
      inputRef?.current?.blur();
    }
  };

  // For caret position at the end
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, inputVal, pointer]);

  return (
    <>
      <TopBar>
        <MenuToggle
          open={menuOpen}
          onToggle={toggleMenu}
          controls="command-menu"
        />
      </TopBar>
      <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
        {menuOpen && (
          <CommandMenu id="command-menu" onRun={handleMenuCommand} />
        )}
        {hints.length > 1 && (
          <div>
            {hints.map(hCmd => (
              <Hints key={hCmd}>{hCmd}</Hints>
            ))}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <label htmlFor="terminal-input">
            <TermInfo /> <MobileBr />
            <MobileSpan>&#62;</MobileSpan>
          </label>
          <Input
            title="terminal-input"
            aria-label={t.inputLabel}
            type="text"
            id="terminal-input"
            autoComplete="off"
            spellCheck="false"
            autoFocus
            autoCapitalize="off"
            ref={inputRef}
            value={inputVal}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        </Form>

        {cmdHistory.map((cmdH, index) => {
          const commandArray = parseCommand(cmdH);
          const validCommand = isKnownCommand(commandArray[0]);
          const contextValue = {
            arg: _.drop(commandArray),
            history: cmdHistory,
            rerender,
            index,
            clearHistory,
          };
          return (
            <div
              key={_.uniqueId(`${cmdH}_`)}
              ref={index === 0 ? latestRef : undefined}
            >
              <div>
                <TermInfo />
                <MobileBr />
                <MobileSpan>&#62;</MobileSpan>
                <span data-testid="input-command">{cmdH}</span>
              </div>
              {validCommand ? (
                <termContext.Provider value={contextValue}>
                  <Output index={index} cmd={commandArray[0]} />
                </termContext.Provider>
              ) : cmdH === "" ? (
                <Empty />
              ) : (
                <CmdNotFound data-testid={`not-found-${index}`}>
                  command not found: {cmdH}
                </CmdNotFound>
              )}
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Terminal;
