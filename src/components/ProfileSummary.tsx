import { useLang } from "../i18n/LangContext";
import { contacts, profile, projects } from "../i18n/profile";

// The terminal only shows content after a command is typed, so crawlers and
// screen readers get the same profile here as plain, visually hidden HTML.
// Links skip the tab order so keyboard focus never lands on hidden elements.
const ProfileSummary: React.FC = () => {
  const { t } = useLang();
  const { about, experience, skills, summary } = t;

  return (
    <section className="sr-only" aria-label={summary.label}>
      <p>
        {about.hi[0]}
        {profile.name}
        {about.hi[1]} {about.role.join("")}
      </p>
      {about.paragraphs.map(text => (
        <p key={text}>{text}</p>
      ))}

      <h2>{summary.experience}</h2>
      <ul>
        {experience.map(({ role, company, period, highlight }) => (
          <li key={`${company}-${role}`}>
            {role}, {company} ({period}): {highlight}
          </li>
        ))}
      </ul>

      <h2>{summary.projects}</h2>
      <ul>
        {projects.map(({ name, stack }) => (
          <li key={name}>
            <a href={`${profile.github}/${name}`} tabIndex={-1}>
              {name}
            </a>{" "}
            ({stack}): {t.projects.desc[name]}
          </li>
        ))}
      </ul>

      <h2>{summary.skills}</h2>
      <ul>
        {skills.map(({ category, items }) => (
          <li key={category}>
            {category}: {items.join(", ")}
          </li>
        ))}
      </ul>

      <h2>{summary.contact}</h2>
      <ul>
        {contacts.map(({ label, value, url }) => (
          <li key={label}>
            {label}:{" "}
            <a href={url} tabIndex={-1}>
              {value}
            </a>
          </li>
        ))}
        <li>
          {t.location[0]}: {t.location[1]}
        </li>
      </ul>
    </section>
  );
};

export default ProfileSummary;
