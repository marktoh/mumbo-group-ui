# 🚀 Releasing a New Version

Shipping a new version is simple and predictable.

---

## 1️⃣ Bump the Version

Choose the appropriate semantic version update:

```bash
npm version patch   # Bug fixes
npm version minor   # New features (backwards compatible)
npm version major   # Breaking changes
```

This will:

- Update `package.json`
- Create a Git commit
- Create a Git tag

---

## 2️⃣ Build the Package

```bash
npm run build
```

Always build before publishing to ensure the `dist/` folder is up to date.

---

## 3️⃣ Publish to npm

```bash
npm publish
```

If this is a scoped package (`@scope/package`), ensure your `package.json` includes:

```json
"publishConfig": {
  "access": "public"
}
```

Without this, npm may attempt to publish it as private.

---

# 📦 Versioning Guide (SemVer)

This project follows **Semantic Versioning**:

| Type    | When to Use It                               |
| ------- | -------------------------------------------- |
| `patch` | Bug fixes and small internal improvements    |
| `minor` | New features that do not break existing APIs |
| `major` | Breaking changes or API redesigns            |

When in doubt:

- If it breaks someone’s existing code → **major**
- If it adds functionality safely → **minor**
- If it fixes something → **patch**
