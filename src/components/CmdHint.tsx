import { CmdHint as Hint } from "../i18n/types";
import { Cmd } from "./styles/Welcome.styled";

const CmdHint: React.FC<{ hint: Hint }> = ({ hint }) => (
  <>
    {hint.pre}
    <Cmd>{hint.cmd}</Cmd>
    {hint.post}
  </>
);

export default CmdHint;
