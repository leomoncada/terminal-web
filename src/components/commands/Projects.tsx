import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const ProjectItem = styled.div`
  margin-bottom: 0.75rem;
`;

const Title = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Stack = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
  line-height: 1.5rem;
`;

const More = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Projects: React.FC = () => {
  return (
    <Wrapper data-testid="projects">
      {projectsData.map(({ name, stack, desc }) => (
        <ProjectItem key={name}>
          <Title
            href={`https://github.com/leomoncada/${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </Title>
          <Stack>{stack}</Stack>
          <Desc>{desc}</Desc>
        </ProjectItem>
      ))}
      <More>
        More on{" "}
        <a
          href="https://github.com/leomoncada"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/leomoncada
        </a>
      </More>
    </Wrapper>
  );
};

const projectsData = [
  {
    name: "aws-serverless-golden-path",
    stack: "Python · cookiecutter · LocalStack · GitHub Actions",
    desc: "Template that generates a serverless AWS service, verifies it against LocalStack in CI with no cloud credentials, and opens cruft update PRs to keep generated services current.",
  },
  {
    name: "localstack-ephemeral-infra",
    stack: "Terraform · LocalStack · checkov · tflint",
    desc: "Modular Terraform that stands up ephemeral environments on LocalStack inside CI, with a parity log of every place the emulator diverged from real AWS.",
  },
  {
    name: "aws-ecs-fargate-platform",
    stack: "Terraform · ECS Fargate · ALB · ECR · GitHub Actions",
    desc: "ECS Fargate platform with separate state per environment and one image promoted from staging to prod, documented with decision records and runbooks.",
  },
];

export default Projects;
