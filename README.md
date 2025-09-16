# @pivanov/vite-plugin-svg-sprite Issue Reproduction

> **Note**: This repository reproduces a non-deterministic build issue with the [@pivanov/vite-plugin-svg-sprite](https://github.com/pivanov/vite-plugin-svg-sprite) plugin.

## Problem Description

The `@pivanov/vite-plugin-svg-sprite` plugin exhibits non-deterministic behavior during production builds, where identical source code generates different file hashes across multiple builds. This inconsistency can cause issues with caching strategies and deployment pipelines.

## How to Reproduce

1. **Build the project twice** using the same source code
2. **Compare the generated file hashes** - they should be different
3. **If hashes appear identical**, try rebuilding a few more times as the issue may not occur on every build

### Build Command

```bash
npm run build
```

## Example Output

### First Build
```bash
> vite-plugin-svg-sprite-reproductions@0.0.0 build
> vite build

vite v7.1.5 building for production...
✓ 19 modules transformed.
dist/index.html                    0.46 kB │ gzip:  0.29 kB
dist/assets/IconSvg-MxGUMvgV.css   0.08 kB │ gzip:  0.10 kB
dist/assets/index-sNyWPsse.css     0.56 kB │ gzip:  0.35 kB
dist/assets/Test3-DOeRpTpF.js      0.16 kB │ gzip:  0.16 kB
dist/assets/Test1-VS5o7dm3.js      0.22 kB │ gzip:  0.20 kB
dist/assets/Test2-BPF1c_J4.js      0.22 kB │ gzip:  0.20 kB
dist/assets/IconSvg-7XmP6gMB.js    0.35 kB │ gzip:  0.29 kB
dist/assets/index-BhHIW05D.js     61.71 kB │ gzip: 24.71 kB
✓ built in 266ms
```

### Second Build (Notice the different hashes)
```bash
> vite-plugin-svg-sprite-reproductions@0.0.0 build
> vite build

vite v7.1.5 building for production...
✓ 19 modules transformed.
dist/index.html                    0.46 kB │ gzip:  0.29 kB
dist/assets/IconSvg-MxGUMvgV.css   0.08 kB │ gzip:  0.10 kB
dist/assets/index-sNyWPsse.css     0.56 kB │ gzip:  0.35 kB
dist/assets/Test3-B94wGnNh.js      0.16 kB │ gzip:  0.16 kB
dist/assets/Test1-BN79uhY9.js      0.22 kB │ gzip:  0.19 kB
dist/assets/Test2-KP_5OsrS.js      0.22 kB │ gzip:  0.19 kB
dist/assets/IconSvg-CWZfm5eD.js    0.35 kB │ gzip:  0.29 kB
dist/assets/index-DCv52U2o.js     61.71 kB │ gzip: 24.71 kB
✓ built in 249ms
```

## Expected Behavior

**❌ Current Issue**: File hashes change between builds:
- `Test3-DOeRpTpF.js` → `Test3-B94wGnNh.js`
- `Test1-VS5o7dm3.js` → `Test1-BN79uhY9.js`
- `Test2-BPF1c_J4.js` → `Test2-KP_5OsrS.js`
- `IconSvg-7XmP6gMB.js` → `IconSvg-CWZfm5eD.js`
- `index-BhHIW05D.js` → `index-DCv52U2o.js`

**✅ Expected**: Identical source code should produce identical file hashes across builds.

## Impact

This non-deterministic behavior can cause:
- Cache invalidation issues
- Deployment inconsistencies
- Problems with content-based caching strategies
- Difficulty in reproducing production builds locally