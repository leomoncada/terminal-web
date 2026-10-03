import styled from "styled-components";
import { useLang } from "../i18n/LangContext";

const menuCommands = [
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
  "help",
  "clear",
];

const Toggle = styled.button`
  font: inherit;
  font-size: 0.875rem;
  padding: 0.25rem 0.625rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text[200]};
  background-color: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors.text[300]};
  border-radius: 4px;

  &:hover,
  &:focus-visible,
  &[aria-pressed="true"] {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const Chip = styled.button<{ $alt?: boolean }>`
  font: inherit;
  padding: 0.125rem 0.625rem;
  cursor: pointer;
  background: transparent;
  color: ${({ theme, $alt }) =>
    $alt ? theme.colors.secondary : theme.colors.primary};
  border: 1px dashed ${({ theme }) => theme.colors.text[300]};
  border-radius: 4px;

  &:hover,
  &:focus-visible {
    border-style: solid;
    border-color: currentColor;
    outline: none;
  }
`;

type ToggleProps = {
  open: boolean;
  onToggle: () => void;
  controls: string;
};

export const MenuToggle: React.FC<ToggleProps> = ({
  open,
  onToggle,
  controls,
}) => {
  const { menu } = useLang().t;

  return (
    <Toggle
      type="button"
      data-menu
      data-testid="menu-toggle"
      aria-pressed={open}
      aria-controls={controls}
      aria-label={open ? menu.closeLabel : menu.openLabel}
      onClick={onToggle}
    >
      {open ? menu.close : menu.open}
    </Toggle>
  );
};

type MenuProps = {
  id: string;
  onRun: (cmd: string) => void;
};

const CommandMenu: React.FC<MenuProps> = ({ id, onRun }) => {
  const { lang, t } = useLang();
  const otherLang = lang === "en" ? "es" : "en";

  return (
    <Menu id={id} data-menu data-testid="command-menu">
      {menuCommands.map(cmd => (
        <Chip key={cmd} type="button" onClick={() => onRun(cmd)}>
          {cmd}
        </Chip>
      ))}
      <Chip
        type="button"
        $alt
        lang={otherLang}
        onClick={() => onRun(`lang ${otherLang}`)}
      >
        {t.menu.switchLang}
      </Chip>
    </Menu>
  );
};

export default CommandMenu;
