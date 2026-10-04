# Repository Guidelines

## Project Structure & Module Organization

This repository is a Create React App portfolio site. Work from the repository root, `amn6.github.io/`.

- `src/index.js` and `src/index.css` bootstrap the React app.
- `src/pages/` contains the main page sections and section-specific styling, including `Main.jsx`, `Landing.jsx`, `About.jsx`, `Experience.jsx`, `Contact.jsx`, `Nav.jsx`, and `Main.css`.
- `src/assets/` contains reusable UI/data assets such as `TopButton.jsx` and `portfolio.json`.
- `public/` contains static files served as-is, including `index.html`, images, the resume PDF, manifest, favicon, and `robots.txt`.
- `build/` is generated production output. Do not edit it by hand.

## Build, Test, and Development Commands

Run commands from `amn6.github.io/`.

- `npm install`: install dependencies from `package-lock.json`.
- `npm start`: start the local development server at `http://localhost:3000`.
- `npm test`: run the Create React App Jest test runner in watch mode.
- `npm run build`: create an optimized production build in `build/`.
- `npm run deploy`: publish the built site to GitHub Pages via `gh-pages`; this runs `npm run build` first.

## Coding Style & Naming Conventions

Use React components in `.jsx` files with PascalCase names, matching the existing pattern: `Landing.jsx`, `TopButton.jsx`, `Experience.jsx`. Prefer small section components under `src/pages/` and shared UI pieces under `src/assets/`. Keep CSS class names descriptive and consistent with existing lowercase or underscore names such as `.subcontent`, `.exp_list`, and `.toTop`.

The project uses the default `react-app` ESLint configuration. Follow the surrounding style: two-space indentation in JSX-heavy files is preferred, imports at the top, and semicolons where already used.

## Testing Guidelines

Testing dependencies are installed through Create React App and React Testing Library, but no test files are currently present. Add tests next to the component under test using CRA conventions, for example `Landing.test.jsx` or `TopButton.test.jsx`. Focus on rendered content, navigation behavior, and user interactions. Run `npm test` before submitting changes, and run `npm run build` for changes that affect routing, assets, or deployment.

## Commit & Pull Request Guidelines

Existing commits use short imperative summaries, such as `Enable GH-Pages` and `Update Resume`. Keep commit subjects concise and action-oriented.

Pull requests should include a brief description, the commands run for verification, and screenshots or screen recordings for visual changes. Mention any changed public assets, resume files, or deployment-related behavior.

## Security & Configuration Tips

Do not commit secrets or personal credentials. Keep deploy settings in `package.json` aligned with the `homepage` value, currently `https://amn6.github.io/`.
