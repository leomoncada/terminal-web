import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const CategoryName = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  min-width: 120px;
  display: inline-block;
`;

const SkillTag = styled.span`
  color: ${({ theme }) => theme.colors.text[100]};
`;

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <SkillsGrid>
        {skillCategories.map(({ category, items }) => (
          <Category key={category}>
            <CategoryName>{category}:</CategoryName>
            <SkillTag>{items.join(", ")}</SkillTag>
          </Category>
        ))}
      </SkillsGrid>
    </Wrapper>
  );
};

const skillCategories = [
  {
    category: "Cloud",
    items: ["AWS", "GCP", "Azure"],
  },
  {
    category: "Containers",
    items: ["Kubernetes", "Docker", "Helm", "ECS", "EKS", "Fargate"],
  },
  {
    category: "IaC",
    items: ["Terraform", "Pulumi", "CloudFormation", "AWS CDK", "Serverless"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "FluxCD"],
  },
  {
    category: "Observability",
    items: [
      "Prometheus",
      "Grafana",
      "Datadog",
      "CloudWatch",
      "Loki",
      "OpenTelemetry",
    ],
  },
  {
    category: "AI / MLOps",
    items: [
      "Amazon Bedrock",
      "Claude API",
      "MCP",
      "RAG",
      "pgvector",
      "MLflow",
      "GPU inference",
    ],
  },
  {
    category: "Security",
    items: [
      "IAM least-privilege",
      "DevSecOps",
      "HIPAA",
      "SOC 2",
      "Prisma Cloud",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Bash"],
  },
  {
    category: "Data & Edge",
    items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Nginx", "Cloudflare"],
  },
  {
    category: "OS",
    items: ["Linux (RHEL, CentOS, Ubuntu)", "Windows Server"],
  },
  {
    category: "Certs",
    items: [
      "Claude Certified Architect - Foundations (Anthropic)",
      "AWS Solutions Architect - Associate",
    ],
  },
];

export default Skills;
