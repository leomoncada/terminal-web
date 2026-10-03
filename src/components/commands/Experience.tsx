import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const ExpItem = styled.div`
  margin-bottom: 0.75rem;
`;

const Role = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const Company = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Period = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};
  font-size: 0.875rem;
`;

const Highlight = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
  line-height: 1.5rem;
`;

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      {experienceData.map(({ role, company, period, highlight }) => (
        <ExpItem key={`${company}-${role}`}>
          <Role>{role}</Role>
          <Company>{company}</Company>
          <Period>{period}</Period>
          <Highlight>{highlight}</Highlight>
        </ExpItem>
      ))}
    </Wrapper>
  );
};

const experienceData = [
  {
    role: "Senior DevOps Engineer",
    company: "Xmartlabs",
    period: "Oct 2021 - Present · Remote (US)",
    highlight:
      "EKS & ECS across client platforms at 99.9% uptime · CI/CD 15 → 5 min · detection & resolution time -90% · HIPAA & SOC 2",
  },
  {
    role: "Senior DevOps Engineer",
    company: "Zinli",
    period: "Jun 2020 - Nov 2021 · Remote (Panama)",
    highlight:
      "Fintech with 1.2M+ users on 90% serverless AWS · Central Bank of Panama compliance, zero high/critical vulns",
  },
  {
    role: "DevOps / SRE Engineer",
    company: "Naranja X",
    period: "Jun 2019 - Jun 2020 · Argentina",
    highlight:
      "Fintech with 9.5M+ users · owned releases, moved ~8 teams to daily production deploys on EKS",
  },
  {
    role: "Cloud Engineer",
    company: "Accenture",
    period: "Jun 2018 - Jun 2019 · Argentina",
    highlight:
      "AWS & Azure alongside on-prem Linux and Windows · Docker, Kubernetes, Big Data platforms",
  },
  {
    role: "Systems Administrator",
    company: "Sonda",
    period: "Mar 2017 - Jun 2018 · Argentina",
    highlight:
      "Service desk to server admin · Red Hat, Windows Server, Active Directory, Nagios",
  },
  {
    role: "Systems Administrator",
    company: "Le Desk S.A.",
    period: "Aug 2016 - Feb 2017 · Argentina",
    highlight:
      "On-prem and AWS infrastructure end to end · Linux, Windows, MySQL, mail & web servers",
  },
];

export default Experience;
