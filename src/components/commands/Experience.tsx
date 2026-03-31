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

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      {/* TODO: Replace with your actual experience */}
      {experienceData.map(({ role, company, period }) => (
        <ExpItem key={`${company}-${role}`}>
          <Role>{role}</Role>
          <Company>{company}</Company>
          <Period>{period}</Period>
        </ExpItem>
      ))}
    </Wrapper>
  );
};

const experienceData = [
  {
    role: "Senior DevOps Engineer",
    company: "Xmartlabs",
    period: "Oct 2021 - Present",
  },
  {
    role: "Cloud Solutions Architect (Freelance)",
    company: "Independent",
    period: "Nov 2019 - Present",
  },
  {
    role: "DevOps Engineer",
    company: "Zinli",
    period: "Jun 2020 - Nov 2021",
  },
  {
    role: "DevOps SRE",
    company: "Naranja X",
    period: "Jun 2019 - Jun 2020",
  },
  {
    role: "Cloud Engineer",
    company: "Accenture Argentina",
    period: "Jun 2018 - Jun 2019",
  },
  {
    role: "System Administrator",
    company: "SONDA",
    period: "Mar 2017 - Jun 2018",
  },
  {
    role: "DevOps Engineer",
    company: "Le Desk S.A.",
    period: "Aug 2016 - Feb 2017",
  },
  {
    role: "Technical Consultant",
    company: "Freelance IT Works",
    period: "Jun 2012 - Aug 2016",
  },
];

export default Experience;
