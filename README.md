<div align="center">

# @mumbo-group/ui

Beautifully preset React components, built for modern apps.

[![npm version](https://img.shields.io/npm/v/@mumbo-group/ui.svg)](https://www.npmjs.com/package/@mumbo-group/ui)
[![license](https://img.shields.io/npm/l/@mumbo-group/ui.svg)](LICENSE)
[![build](https://img.shields.io/badge/build-vite-blue)]()
[![typescript](https://img.shields.io/badge/typescript-ready-blue)]()

</div>

---

## Why @mumbo-group/ui?

- 🎨 Beautiful preset styling out of the box
- ⚡ Lightweight and fast
- 📘 Fully typed with TypeScript
- ♻️ Modern ESM + CJS support
- 🧩 Designed for real-world production apps

Simple to use. Easy to extend. Built to last.

---

## Installation

Install via npm:

```bash
npm install @mumbo-group/ui
```

Or with Yarn:

```bash
yarn add @mumbo-group/ui
```

---

## Quick Start

```tsx
import { Button } from "@mumbo-group/ui";

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

<div align="center">

Built with care for developers who value clean design and solid foundations.

</div>

---

## Contributing

Contributions are welcome and appreciated.

If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

For larger changes, please open an issue first to discuss the direction.

---

## Publishing a New Version

1. Update the version:

```bash
npm version patch
# or minor / major
```

2. Build the project:

```bash
npm run build
```

3. Publish to npm:

```bash
npm publish
```

Since this is a scoped package, make sure:

```json
"publishConfig": {
  "access": "public"
}
```

See [./docs/publish-new-version.md](./docs/publish-new-version.md) for release history.

---

## Roadmap

Planned improvements:

- [ ] Expand core component set
- [ ] Improve accessibility coverage
- [ ] Add documentation site
- [ ] Add component playground / live previews
- [ ] Strengthen testing coverage

## Support

Found a bug? Have a feature request?

Please open an issue on GitHub.  
Clear reproduction steps are greatly appreciated.

---

## Changelog

See [CHANGELOG.md](./docs/CHANGELOG.md) for release history.

---

## Maintainer

Maintained by **Mumbo Group**.

---

## License

MIT © 2026 Mumbo Group  
See [LICENSE](./docs/LICENSE) for full details.

---

<div align="center">

Built with care.  
Designed for developers who value clean foundations.

</div>
