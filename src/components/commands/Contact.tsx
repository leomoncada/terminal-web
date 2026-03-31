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
      {/* TODO: Replace with your actual contact info */}
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
    label: "LinkedIn",
    value: "linkedin.com/in/leomar-moncada",
    url: "https://www.linkedin.com/in/leomar-moncada/",
  },
  // TODO: Add your email and GitHub when ready
  // {
  //   label: "Email",
  //   value: "your@email.com",
  //   url: "mailto:your@email.com",
  // },
  // {
  //   label: "GitHub",
  //   value: "github.com/your-username",
  //   url: "https://github.com/your-username",
  // },
];

export default Contact;
