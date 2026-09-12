import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const ContactItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  min-width: 100px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact: React.FC = () => {
  return (
    <Wrapper data-testid="contact">
      {contactData.map(({ label, value, url }) => (
        <ContactItem key={label}>
          <Label>{label}:</Label>
          {url ? (
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {value}
            </Link>
          ) : (
            <span>{value}</span>
          )}
        </ContactItem>
      ))}
    </Wrapper>
  );
};

const contactData = [
  {
    label: "Email",
    value: "leomarmoncadah@gmail.com",
    url: "mailto:leomarmoncadah@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/leomar-moncada",
    url: "https://www.linkedin.com/in/leomar-moncada/",
  },
  {
    label: "GitHub",
    value: "github.com/leomoncada",
    url: "https://github.com/leomoncada",
  },
  {
    label: "Location",
    value: "Malaga, Spain (open to remote)",
  },
];

export default Contact;
