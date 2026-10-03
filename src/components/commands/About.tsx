import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { useLang } from "../../i18n/LangContext";
import { profile } from "../../i18n/profile";

const About: React.FC = () => {
  const { hi, role, paragraphs } = useLang().t.about;

  return (
    <AboutWrapper data-testid="about">
      <p>
        {hi[0]}
        <HighlightSpan>{profile.name}</HighlightSpan>
        {hi[1]}
      </p>
      <p>
        {role[0]}
        <HighlightAlt>{role[1]}</HighlightAlt>
        {role[2]}
      </p>
      {paragraphs.map(text => (
        <p key={text}>{text}</p>
      ))}
    </AboutWrapper>
  );
};

export default About;
