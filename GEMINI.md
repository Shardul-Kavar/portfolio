# Gemini Project Context: Astro Bento Portfolio

This document provides context for the AI assistant to understand the project structure, technologies, and development workflows.

## Project Overview

This is a modern, bento-style personal portfolio website built with the [Astro](https://astro.build/) framework. It's designed as a single-page experience (mostly) and is optimized for performance and SEO.

The project features:
- A sleek, responsive, and minimal "Bento UI" design.
- A blog powered by Markdown files.
- An interactive 3D globe visualization.
- RSS feed generation.

### Technology Stack

- **Framework**: [Astro](https://astro.build/)
- **Languages**: TypeScript, JavaScript
- **UI Components**: The project uses a mix of `.astro` components, Svelte (`.svelte`), and SolidJS (`.tsx`).
- **Styling**: [UnoCSS](https://unocss.dev/) is used for atomic CSS. Configuration is in `uno.config.ts`.
- **Animations**: [Motion One](https://motion.dev/) and [GSAP](https://gsap.com/) are used for animations.
- **Data Visualization**: [D3.js](https://d3js.org/) is used for the interactive globe feature found in `src/components/Globe.tsx`.
- **Linting**: ESLint with plugins for Astro and JSX a11y.
- **Formatting**: Prettier with a plugin for Astro.

## Key Commands

The following commands are defined in `package.json`:

- `npm run dev`: Starts the Astro development server.
- `npm run build`: Builds the static site for production to the `dist/` directory.
- `npm run preview`: Starts a local server to preview the production build.
- `npm run check`: Runs Astro's diagnostic tool to check for type errors and other issues in `.astro` files.
- `npm run eslint`: Lints the source files (Astro and JS) for code quality and style issues.

## Project Structure

- `astro.config.mjs`: The primary Astro configuration file. Contains site metadata, integrations, and build settings.
- `uno.config.ts`: The configuration file for UnoCSS, defining presets, rules, and shortcuts for styling.
- `src/`: Contains the main application source code.
  - `pages/`: All pages and routes for the website. Files here are automatically routed by Astro based on their filename.
  - `components/`: Reusable UI components. This project contains a mix of `.astro`, `.tsx` (SolidJS), and `.svelte` components.
  - `layouts/`: Base layout components that define the structure for different page types (e.g., `Layout.astro`, `LayoutBlogPost.astro`).
  - `data/blog/`: Contains the Markdown (`.md`) files for blog posts.
  - `lib/`: Utility functions and constants.
  - `public/`: Static assets (images, fonts, icons) that are copied directly to the build output.

## Development Conventions

- **Styling**: Use UnoCSS utility classes for styling directly in the HTML templates. For custom styles or complex configurations, modify `uno.config.ts`.
- **Components**: Create reusable UI elements as components in the `src/components` directory. Choose the appropriate technology (Astro, Svelte, SolidJS) based on the required interactivity.
- **Blog Posts**: To add a new blog post, create a new Markdown file in the `src/data/blog/` directory.
- **Configuration**: Site-specific details like the domain name should be updated in `astro.config.mjs`.
- **Code Quality**: Before committing, run `npm run check` and `npm run eslint` to ensure the code is type-safe and follows project style guidelines.
