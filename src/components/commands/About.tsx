import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Leomar Moncada</HighlightSpan>!
      </p>
      <p>
        I'm a{" "}
        <HighlightAlt>
          DevOps Engineer, SRE, and Cloud Solutions Architect
        </HighlightAlt>{" "}
        based in Malaga, Spain.
      </p>
      <p>
        Passionate and results-driven with 13+ years of experience
        <br />
        architecting cloud solutions with AWS, GCP, and Oracle Cloud.
        <br />
        Kubernetes & Docker enthusiast | CI/CD expert.
      </p>
    </AboutWrapper>
  );
};

export default About;
