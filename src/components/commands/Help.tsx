import {
  Cmd,
  CmdDesc,
  CmdList,
  EggsHint,
  HelpWrapper,
  KeyContainer,
  KeyLabel,
} from "../styles/Help.styled";
import { commands } from "../../utils/commands";
import { generateTabs } from "../../utils/funcs";
import { useLang } from "../../i18n/LangContext";

const Help: React.FC = () => {
  const { desc, keys, eggs } = useLang().t.help;

  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc[cmd]}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        {keys.map(([key, action]) => (
          <div key={key}>
            <KeyLabel>{key}</KeyLabel>=&gt; {action}
          </div>
        ))}
      </KeyContainer>
      <EggsHint>{eggs}</EggsHint>
    </HelpWrapper>
  );
};

export default Help;
