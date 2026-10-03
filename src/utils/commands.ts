type Command = {
  cmd: string;
  tab: number;
}[];

// Descriptions live in the translations (help.desc)
export const commands: Command = [
  { cmd: "about", tab: 8 },
  { cmd: "clear", tab: 8 },
  { cmd: "contact", tab: 6 },
  { cmd: "experience", tab: 3 },
  { cmd: "help", tab: 9 },
  { cmd: "history", tab: 6 },
  { cmd: "lang", tab: 9 },
  { cmd: "projects", tab: 5 },
  { cmd: "skills", tab: 7 },
  { cmd: "welcome", tab: 6 },
];

// Easter eggs: they run, but stay out of help and autocomplete
export const hiddenCommands = [
  "sudo",
  "whoami",
  "ls",
  "kubectl",
  "terraform",
  "rm",
  "exit",
];
