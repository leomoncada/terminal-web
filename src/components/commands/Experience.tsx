import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";
import { useLang } from "../../i18n/LangContext";

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
  const { experience } = useLang().t;

  return (
    <Wrapper data-testid="experience">
      {experience.map(({ role, company, period, highlight }) => (
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

export default Experience;
