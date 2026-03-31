# Leo - Terminal Portfolio

A terminal-style portfolio website built with React, TypeScript, and Styled-Components.

Based on [satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio) (MIT License).

## Available Commands

| Command      | Description              |
| ------------ | ------------------------ |
| `about`      | Who am I                 |
| `skills`     | My tech stack and tools  |
| `experience` | My work experience       |
| `contact`    | How to reach me          |
| `resume`     | Download my CV           |
| `help`       | List available commands  |
| `history`    | View command history     |
| `clear`      | Clear the terminal       |
| `welcome`    | Display hero section     |

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

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`.

## Customization

- **Content**: Edit files in `src/components/commands/` (look for `TODO` comments)
- **Resume PDF**: Place your `resume.pdf` in the `public/` folder
- **Domain**: Add a `CNAME` file in `public/` with your domain, then configure DNS
- **Meta tags**: Update `index.html`

## License

MIT - See [LICENSE](LICENSE) for the original license by [Sat Naing](https://github.com/satnaing).
