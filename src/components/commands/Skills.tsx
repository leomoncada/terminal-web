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
  min-width: 17ch;
  display: inline-block;

  @media (max-width: 550px) {
    display: block;
    width: 100%;
  }
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
    items: [
      "AWS (EC2, ECS, EKS, Lambda, VPC, RDS, DynamoDB, S3, Organizations)",
      "GCP",
      "Azure",
    ],
  },
  {
    category: "Containers",
    items: ["Kubernetes (EKS)", "Helm", "Docker", "ECS", "Fargate"],
  },
  {
    category: "IaC",
    items: [
      "Terraform",
      "Pulumi",
      "CloudFormation",
      "AWS CDK",
      "Serverless Framework",
      "Ansible",
    ],
  },
  {
    category: "CI/CD & GitOps",
    items: [
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Bitbucket Pipelines",
      "Argo CD",
      "FluxCD",
    ],
  },
  {
    category: "Observability",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
      "Datadog",
      "CloudWatch",
      "ELK",
    ],
  },
  {
    category: "Security",
    items: [
      "IAM least privilege",
      "KMS",
      "Secrets Manager",
      "WAF",
      "GuardDuty",
      "Prisma Cloud",
      "checkov",
      "HIPAA",
      "SOC 2",
    ],
  },
  {
    category: "Linux & Systems",
    items: ["Red Hat", "Ubuntu", "Windows Server", "Nginx", "Apache"],
  },
  {
    category: "Scripting",
    items: ["Bash", "Python"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "Kafka"],
  },
  {
    category: "AI Infra",
    items: ["Amazon Bedrock", "RAG", "pgvector", "MLflow", "Claude Code"],
  },
  {
    category: "Certs",
    items: [
      "AWS Solutions Architect - Associate",
      "Claude Certified Architect - Foundations (2026)",
    ],
  },
];

export default Skills;
