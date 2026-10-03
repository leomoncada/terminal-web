import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";
import { contacts } from "../../i18n/profile";
import { useLang } from "../../i18n/LangContext";

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
  const [locationLabel, location] = useLang().t.location;

  return (
    <Wrapper data-testid="contact">
      {contacts.map(({ label, value, url }) => (
        <ContactItem key={label}>
          <Label>{label}:</Label>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {value}
          </Link>
        </ContactItem>
      ))}
      <ContactItem>
        <Label>{locationLabel}:</Label>
        <span>{location}</span>
      </ContactItem>
    </Wrapper>
  );
};

export default Contact;
