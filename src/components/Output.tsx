import About from "./commands/About";
import Clear from "./commands/Clear";
import Contact from "./commands/Contact";
import EasterEgg from "./commands/EasterEgg";
import Experience from "./commands/Experience";
import Help from "./commands/Help";
import Lang from "./commands/Lang";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Skills from "./commands/Skills";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { hiddenCommands } from "../utils/commands";
import { useContext } from "react";
import { useLang } from "../i18n/LangContext";

type Props = {
  index: number;
  cmd: string;
};

// Commands that read their own arguments instead of rejecting them
const argCommands = ["lang", ...hiddenCommands];

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);
  const { t } = useLang();

  if (arg.length > 0 && !argCommands.includes(cmd))
    return (
      <UsageDiv data-testid="usage-output">
        {t.usage} {cmd}
      </UsageDiv>
    );

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {hiddenCommands.includes(cmd) ? (
        <EasterEgg cmd={cmd} />
      ) : (
        {
          about: <About />,
          clear: <Clear />,
          contact: <Contact />,
          experience: <Experience />,
          help: <Help />,
          history: <History />,
          lang: <Lang />,
          projects: <Projects />,
          skills: <Skills />,
          welcome: <Welcome />,
        }[cmd]
      )}
    </OutputContainer>
  );
};

export default Output;
