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
        <HighlightAlt>Senior DevOps / Site Reliability Engineer</HighlightAlt>{" "}
        based in Malaga, Spain.
      </p>
      <p>
        Ten years building and running cloud infrastructure
        <br />
        on AWS, GCP and Azure. Mostly Kubernetes, Terraform and CI/CD,
        <br />
        and lately the platform side of GenAI workloads.
      </p>
    </AboutWrapper>
  );
};

export default About;
