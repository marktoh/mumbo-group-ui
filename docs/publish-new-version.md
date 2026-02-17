# How to Publish a New Version of @mumbo-group/ui

This document explains the steps to release a new version of the library.

## 1. Update Version

Use **semver** rules:

- `patch`: Bug fixes only
- `minor`: New features, backwards compatible
- `major`: Breaking changes

```bash
# e.g. minor update
npm version minor
```
