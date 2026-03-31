import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
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
        <div>
          Welcome to my terminal portfolio. DevOps | SRE | Cloud Architect
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
