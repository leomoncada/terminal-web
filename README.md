# Leo - Terminal Portfolio

A terminal-style portfolio website built with React, TypeScript, and Styled-Components.

Based on [satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio) (MIT License).

## Available Commands

| Command      | Description               |
| ------------ | ------------------------- |
| `about`      | Who am I                  |
| `skills`     | My tech stack and tools   |
| `experience` | My work experience        |
| `projects`   | Things I've built         |
| `contact`    | How to reach me           |
| `lang`       | Switch language (en / es) |
| `help`       | List available commands   |
| `history`    | View command history      |
| `clear`      | Clear the terminal        |
| `welcome`    | Display hero section      |

There are also a few hidden commands for anyone who knows their way around a shell.

Visitors who'd rather not type can turn on a clickable command menu with the `☰ menu` toggle (top right). It is off by default and remembered per browser.

The site is available in English and Spanish: the first visit follows the browser language, and `lang en` / `lang es` switches and remembers the choice.

## Running Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`, after lint, format and test checks pass.

## Customization

- **Content**: Edit the translations in `src/i18n/` (`en.ts`, `es.ts`) and the shared links in `src/i18n/profile.ts`
- **Domain**: Add a `CNAME` file in `public/` with your domain, then configure DNS
- **Meta tags**: Update `index.html`

## License

MIT - See [LICENSE](LICENSE) for the original license by [Sat Naing](https://github.com/satnaing).
