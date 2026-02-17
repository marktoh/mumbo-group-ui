# Package

## Creating a Package

Files required: package.json, tsconfig.build.json

Package.json

```tsx
  "name": "@mumbo-group/ui",
  "description": "@mumbo-group/ui - Preset styled React components",
  "version": "0.4.0",
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
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
 "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint .",
    "test": "vitest",
    "preview": "vite preview"
  },
  "peerDependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
```

".cjs.js"
CJS = CommonJS
Older Node.js module system.
Used by:
Older Node projects
Some backend apps
Tools that still rely on require()

".es.js"
ESM = ES Modules (ESM)
Modern JavaScript module system
Used by:
Modern React apps
Vite
Next.js
Modern bundlers
Browsers (native support)
Files extensions:
.mjs
.js

"files" indicates which directories to use during distribution. In this case, it is "dist".

"publishConfig" indicates how npm will publish the package. By default, npm tries to publish it as private. To overcome this, set the "access" to "public" since most organizations are set to public by default.

"peerDependencies" avoids duplication of the React package by consumers. If it is in "dependencies", upon installation, the consumer will run into the following error: `uncaught TypeError: Cannot read properties of undefined (reading 'recentlyCreatedOwnerStacks')`. This is because the consumer will have duplicate versions of React, leading to a conflict which results in the error above. To resolve this, make sure the react and react-dom packages are in the "peerDependecies" scope.

tsconfig.build.json

```tsx
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

The include key indicates which folder to select for distribution.
