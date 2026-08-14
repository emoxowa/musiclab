# MusicLab

Music streaming web app built with React, TypeScript and Vite.

## Running the app

### Node version

Use the Node version pinned in `.nvmrc`:

```bash
nvm use
```

### Dependencies

Install necessary dependencies (this also sets up git hooks via husky):

```bash
npm install
```

### Env vars

Copy necessary environment variables:

```bash
cp .env.example .env
```

And give them values (`VITE_API_URL` — base URL of the [musiclab-api](https://github.com/mrerberg/musiclab-api) backend).

### Start app

To start the app in dev mode use command:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Architecture

The project follows [Feature-Sliced Design](https://feature-sliced.design/).

## Styling

App uses [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) for components.

## State management

- [Redux Toolkit](https://redux-toolkit.js.org/) — client state
- [TanStack Query](https://tanstack.com/query) — server state
