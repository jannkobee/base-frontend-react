# React + Vite Template

A modern React development template powered by Vite for fast development and optimized builds.

## Features

- ⚡ Lightning-fast development with Vite's HMR (Hot Module Replacement)
- ⚛️ React 18 support
- 🔧 Pre-configured ESLint for code quality
- 📦 Optimized build process
- 🚀 Fast Refresh for instant feedback

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone this repository or create a new project:
   ```bash
   npm create vite@latest my-react-app -- --template react
   cd my-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Plugin Options

This template supports two official Vite React plugins:

### @vitejs/plugin-react
Uses [Babel](https://babeljs.io/) for Fast Refresh. Ideal for projects that need Babel transforms or plugins.

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### @vitejs/plugin-react-swc
Uses [SWC](https://swc.rs/) for Fast Refresh. Offers faster compilation times with Rust-based tooling.

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

## Upgrading to TypeScript

For production applications, we recommend using TypeScript for better type safety and developer experience:

1. Use the TypeScript template:
   ```bash
   npm create vite@latest my-react-app -- --template react-ts
   ```

2. Or migrate an existing project by installing TypeScript dependencies:
   ```bash
   npm install -D typescript @types/react @types/react-dom
   ```

3. Configure [`typescript-eslint`](https://typescript-eslint.io/) for type-aware linting rules.

## Project Structure

```
my-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)

## Personal Project

This is a personal development project for learning and experimentation.