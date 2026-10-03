export type Lang = "en" | "es";

// Text around an inline command, rendered as: pre `cmd` post
export type CmdHint = { pre: string; cmd: string; post: string };

export type Job = {
  role: string;
  company: string;
  period: string;
  highlight: string;
};

export type SkillCategory = { category: string; items: string[] };

export type Content = {
  langName: string;
  inputLabel: string;
  usage: string;
  welcome: {
    tagline: string;
    role: string;
    help: CmdHint;
    menu: string;
    lang: CmdHint;
  };
  about: {
    hi: [string, string];
    role: [string, string, string];
    paragraphs: string[];
  };
  location: [string, string];
  experience: Job[];
  skills: SkillCategory[];
  projects: {
    desc: Record<string, string>;
    more: string;
  };
  help: {
    desc: Record<string, string>;
    keys: [string, string][];
    eggs: string;
  };
  lang: {
    current: string;
    usage: string;
    changed: string;
  };
  menu: {
    open: string;
    close: string;
    openLabel: string;
    closeLabel: string;
    switchLang: string;
  };
  summary: {
    label: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  eggs: {
    sudo: string;
    whoami: CmdHint;
    pods: string;
    kubectlError: string;
    plan: CmdHint;
    apply: CmdHint;
    terraformUsage: string;
    rm: string;
    exit: CmdHint;
  };
};
