import { useContext } from "react";
import { UsageDiv, Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { content, isLang, useLang } from "../../i18n/LangContext";

// The switch itself happens on submit (see Terminal); this only reports it
const Lang: React.FC = () => {
  const { arg } = useContext(termContext);
  const { t } = useLang();

  if (arg.length === 0)
    return (
      <Wrapper data-testid="lang">
        <div>{t.lang.current}</div>
        <div>{t.lang.usage}</div>
      </Wrapper>
    );

  if (arg.length === 1 && isLang(arg[0]))
    return <Wrapper data-testid="lang">{content[arg[0]].lang.changed}</Wrapper>;

  return <UsageDiv data-testid="usage-output">{t.lang.usage}</UsageDiv>;
};

export default Lang;
