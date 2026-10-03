import { useContext } from "react";
import styled from "styled-components";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { useLang } from "../../i18n/LangContext";
import CmdHint from "../CmdHint";

const Pre = styled.pre`
  font-family: inherit;
  white-space: pre-wrap;
  margin-bottom: 0.5rem;

  @media (max-width: 550px) {
    font-size: 0.75rem;
  }
`;

const Muted = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};
`;

const Dir = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const pods = `NAME             READY  STATUS   RESTARTS  AGE
leomar-sre-0     1/1    Running  0         10y
on-call-pager-0  1/1    Running  3         6y
coffee-0         1/1    Running  127       10y`;

const plan = `Terraform will perform the following actions:

  # leomar.your_team will be created
  + resource "leomar" "your_team" {
      + role     = "DevOps / SRE / Platform"
      + location = "Remote, Málaga (ES)"
      + start    = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.`;

const apply = `leomar.your_team: Creating...
leomar.your_team: Creation complete after 0s

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.`;

const EasterEgg: React.FC<{ cmd: string }> = ({ cmd }) => {
  const { arg } = useContext(termContext);
  const { eggs } = useLang().t;
  const sub = arg.join(" ");

  const output = (() => {
    switch (cmd) {
      case "sudo":
        return <div>{eggs.sudo}</div>;
      case "whoami":
        return <CmdHint hint={eggs.whoami} />;
      case "ls":
        return (
          <div>
            about.txt&nbsp;&nbsp;contact.vcf&nbsp;&nbsp;experience.log&nbsp;&nbsp;
            <Dir>projects/</Dir>&nbsp;&nbsp;skills.yaml
          </div>
        );
      case "kubectl":
        return sub === "get pods" || sub === "get po" ? (
          <>
            <Pre>{pods}</Pre>
            <Muted>{eggs.pods}</Muted>
          </>
        ) : (
          <div>{eggs.kubectlError}</div>
        );
      case "terraform":
        if (sub === "plan")
          return (
            <>
              <Pre>{plan}</Pre>
              <Muted>
                <CmdHint hint={eggs.plan} />
              </Muted>
            </>
          );
        if (sub === "apply")
          return (
            <>
              <Pre>{apply}</Pre>
              <Muted>
                <CmdHint hint={eggs.apply} />
              </Muted>
            </>
          );
        return <div>{eggs.terraformUsage}</div>;
      case "rm":
        return <div>{eggs.rm}</div>;
      case "exit":
        return <CmdHint hint={eggs.exit} />;
      default:
        return null;
    }
  })();

  return <Wrapper data-testid={`egg-${cmd}`}>{output}</Wrapper>;
};

export default EasterEgg;
