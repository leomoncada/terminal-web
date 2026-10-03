import CmdHint from "../CmdHint";
import { useLang } from "../../i18n/LangContext";
import {
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  const { welcome } = useLang().t;

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    __                                     
   / /   ___  ____  ____ ___  ____ ______  
  / /   / _ \\/ __ \\/ __ \`__ \\/ __ \`/ ___/ 
 / /___/  __/ /_/ / / / / / / /_/ / /     
/_____/\\___/\\____/_/ /_/ /_/\\__,_/_/      
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    __              
   / /   ___  ____  
  / /   / _ \\/ __ \\ 
 / /___/  __/ /_/ / 
/_____/\\___/\\____/  
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>{welcome.tagline}</div>
        <div>{welcome.role}</div>
        <Seperator>----</Seperator>
        <div>
          <CmdHint hint={welcome.help} />
        </div>
        <div>{welcome.menu}</div>
        <div>
          <CmdHint hint={welcome.lang} />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
