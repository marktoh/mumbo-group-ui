<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">@mumbo-group/ui</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/marktoh/mumbo-group-ui.svg)](https://github.com/marktoh/mumbo-group-ui/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/marktoh/mumbo-group-ui.svg)](https://github.com/marktoh/mumbo-group-ui/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Beautifully preset React components, built for modern apps.
    <br> 
</p>

## Why @mumbo-group/ui?

- 🎨 Beautiful preset styling out of the box
- ⚡ Lightweight and fast
- 📘 Fully typed with TypeScript
- ♻️ Modern ESM + CJS support
- 🧩 Designed for real-world production apps

Simple to use. Easy to extend. Built to last.

## Installation

Install via npm:

```bash
npm install @mumbo-group/ui
```

Or with Yarn:

```bash
yarn add @mumbo-group/ui
```

## Quick Start

```tsx
import { Button } from "@mumbo-group/ui";

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

## Contributing

Contributions are welcome and appreciated.

If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

For larger changes, please open an issue first to discuss the direction.

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

See [./docs/publish-new-version.md](./docs/publish-new-version.md) for publishing a new version.

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

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## Maintainer

Maintained by **Mumbo Group**.

## License

MIT © 2026 Mumbo Group  
See [LICENSE](LICENSE.md) for full details.

---

<div align="center">

Built with care.  
Designed for developers who value clean foundations.

</div>
