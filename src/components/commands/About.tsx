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
        <HighlightAlt>Senior DevOps / SRE / Platform Engineer</HighlightAlt>{" "}
        based in Málaga, Spain.
      </p>
      <p>
        10+ years in infrastructure, fully remote since 2020 for companies in
        the US and Latin America. I build and run the platform layer product
        teams ship on: AWS provisioned with Terraform, workloads on Kubernetes
        and ECS, and GitOps delivery that promotes the same artifact from
        staging to production.
      </p>
      <p>
        Much of that work was in regulated fintech and healthcare (Central Bank
        of Panama, HIPAA, SOC 2), so security lives inside the pipeline. Lately
        I also extend these platforms to host GenAI workloads on AWS.
      </p>
      <p>Open to remote roles.</p>
    </AboutWrapper>
  );
};

export default About;
