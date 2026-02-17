# Creating a New UI Component Library

This guide outlines the recommended structure and configuration for publishing a professional React component library.

The goal:  
✔ Maximum compatibility  
✔ Clean distribution  
✔ No React duplication  
✔ Production-ready packaging

---

## Essential `package.json` Setup

Below is a clean, production-ready configuration:

```json
{
  "name": "@mumbo-group/ui",
  "description": "Beautifully preset React    components, built for modern apps.",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/mumbo-group-ui.cjs.js",
  "module": "dist/mumbo-group-ui.es.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/mumbo-group-ui.es.js",
      "require": "./dist/mumbo-group-ui.cjs.js"
    }
  },
  "files": ["dist"],
  "publishConfig": {
    "access": "public"
  },
  "peerDependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

### Key Highlights

- `exports` ensures proper ESM/CJS resolution
- `files` ensures only compiled output is published
- `publishConfig.access` is required for scoped public packages
- `peerDependencies` prevents React duplication

---

## Package Output Structure

Your UI library should ship in **two module formats** to support all environments.

| Field    | File                         | What it’s for                               |
| -------- | ---------------------------- | ------------------------------------------- |
| `main`   | `dist/mumbo-group-ui.cjs.js` | CommonJS (Node, older tooling)              |
| `module` | `dist/mumbo-group-ui.es.js`  | ES Modules (Vite, Next.js, modern bundlers) |
| `types`  | `dist/index.d.ts`            | TypeScript definitions                      |

#### Why support both?

Different tools expect different module systems.

- Older environments use **CommonJS**
- Modern tooling prefers **ES Modules**
- TypeScript users expect proper `.d.ts` definitions

By shipping both formats, your library “just works” everywhere — without forcing consumers to configure anything.

---

## Why React Must Be a Peer Dependency

```json
"peerDependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

Never put `react` or `react-dom` inside `dependencies` for a component library.

If you do, consumers may end up with **two React instances**, which can cause runtime failures like:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'recentlyCreatedOwnerStacks')
```

Correct model:

- The consuming app owns React
- Your library uses whatever React version the app provides

This avoids version conflicts and keeps the ecosystem stable.

---

## TypeScript Build Configuration

### `tsconfig.build.json`

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "dist",
    "declarationMap": false,
    "noEmit": false
  },
  "include": ["lib"]
}
```

### What This Does

- Generates `.d.ts` type definitions
- Outputs everything to `dist/`
- Compiles only the `lib/` directory for distribution

This keeps your source code separate from your published output.

---

## What Actually Gets Published

```json
"files": ["dist"]
```

Only the compiled `dist/` folder is included in the npm package.

This ensures your package is:

- 📦 Small
- 🧼 Clean
- 🔒 Free of source clutter
- 🎯 Focused on production artifacts only

## Recommended Folder Structure

A clean UI library typically looks like this:

```
lib/
  components/
    Button/
      Button.tsx
      Button.types.ts
      index.ts
  index.ts

dist/
package.json
tsconfig.build.json
```

Source code lives in `lib/`  
Compiled output goes to `dist/`

---

## Best Practices Summary

- Ship both **CJS and ESM**
- Use `peerDependencies` for React
- Generate proper `.d.ts` files
- Publish only compiled output
- Keep your public API intentional and minimal

Build it once. Make it work everywhere.
