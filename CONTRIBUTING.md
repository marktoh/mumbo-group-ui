# Contributing to @mumbo-group/ui

Thank you for helping improve **@mumbo-group/ui**!  
We welcome bug fixes, new components, improvements, and documentation contributions.

This guide ensures contributions are **consistent, high-quality, and easy to review**.

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/your-username/ui.git
cd ui
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

Use a descriptive branch name:

```bash
git checkout -b feat/button-variant
```

## Commit Guidelines

We follow **Conventional Commits**:

```
<type>(<scope>): <subject>
```

### Types

| Type       | When to Use                                |
| ---------- | ------------------------------------------ |
| `feat`     | New feature or component                   |
| `fix`      | Bug fix                                    |
| `docs`     | Documentation only                         |
| `style`    | Formatting, missing semicolons, linting    |
| `refactor` | Refactoring code without changing behavior |
| `test`     | Adding or fixing tests                     |
| `chore`    | Maintenance tasks, build tools, scripts    |

### Example

```bash
git commit -m "feat(Button): add new variant with secondary style"
```

## Testing

Before submitting a PR, make sure your changes pass all tests:

```bash
npm run test
```

Run linting:

```bash
npm run lint
```

Run development server (optional):

```bash
npm run dev
```

## Publishing / Release Workflow

We follow **Semantic Versioning**:

- **Patch**: Bug fixes
- **Minor**: New features, backward-compatible
- **Major**: Breaking changes

The process for releases:

1. Update version using npm:

```bash
npm version patch   # or minor / major
```

2. Build the project:

```bash
npm run build
```

3. Publish:

```bash
npm publish
```

Automated changelog generation:

```bash
npx standard-version
```

This will create a new changelog entry based on conventional commits.

## Documentation

If your change affects usage:

- Update the relevant `docs/` file
- Ensure examples are clear and accurate
- Keep documentation in sync with component API

## Submitting a Pull Request

1. Push your branch to your fork:

```bash
git push origin feat/button-variant
```

2. Open a PR against `main`
3. Include a description, motivation, and any screenshots if relevant
4. Reference related issues, if any

## Best Practices

- Keep PRs focused and small
- Follow the coding style and TypeScript patterns used in the library
- Add tests for new functionality
- Write descriptive commit messages following conventional commits

## Reporting Issues

- Provide clear reproduction steps
- Include screenshots when relevant
- Mention your environment (Node version, browser, OS)

## Thank You

Your contributions help make **@mumbo-group/ui** better for everyone.  
We appreciate your time, effort, and feedback!
