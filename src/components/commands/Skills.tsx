import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";
import { useLang } from "../../i18n/LangContext";

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
  min-width: 18ch;
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
  const { skills } = useLang().t;

  return (
    <Wrapper data-testid="skills">
      <SkillsGrid>
        {skills.map(({ category, items }) => (
          <Category key={category}>
            <CategoryName>{category}:</CategoryName>
            <SkillTag>{items.join(", ")}</SkillTag>
          </Category>
        ))}
      </SkillsGrid>
    </Wrapper>
  );
};

export default Skills;
