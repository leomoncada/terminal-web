export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

export const argTab = (): string[] | undefined => {
  return undefined;
};

// "lang  es " -> ["lang", "es"]
export const parseCommand = (input: string): string[] =>
  input.trim().split(/\s+/);
