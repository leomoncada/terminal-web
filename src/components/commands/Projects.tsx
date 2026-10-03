import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";
import { useLang } from "../../i18n/LangContext";
import { profile, projects } from "../../i18n/profile";

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
  const { desc, more } = useLang().t.projects;

  return (
    <Wrapper data-testid="projects">
      {projects.map(({ name, stack }) => (
        <ProjectItem key={name}>
          <Title
            href={`${profile.github}/${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </Title>
          <Stack>{stack}</Stack>
          <Desc>{desc[name]}</Desc>
        </ProjectItem>
      ))}
      <More>
        {more}{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github.com/leomoncada
        </a>
      </More>
    </Wrapper>
  );
};

export default Projects;
