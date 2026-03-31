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
        {/* TODO: Replace with your actual skills */}
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
    items: ["AWS", "GCP", "Heroku", "Oracle Cloud"],
  },
  {
    category: "Containers",
    items: ["Docker", "Kubernetes", "Helm", "ECS"],
  },
  {
    category: "IaC",
    items: ["Terraform", "Serverless Framework"],
  },
  {
    category: "CI/CD",
    items: ["GitLab CI", "Bitbucket Pipelines", "GitHub Actions"],
  },
  {
    category: "Monitoring",
    items: ["Datadog", "Prometheus", "Grafana", "CloudWatch"],
  },
  {
    category: "OS & Servers",
    items: ["Linux", "Windows Server", "Nginx", "Apache Tomcat"],
  },
  {
    category: "Big Data",
    items: ["Cloudera", "Hadoop", "Hive", "Kafka", "Cassandra"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Certs",
    items: ["AWS Solutions Architect - Associate"],
  },
];

export default Skills;
