# @pivanov/vite-plugin-svg-sprite reproductions

* This is a reproduction of the [@pivanov/vite-plugin-svg-sprite](https://github.com/pivanov/vite-plugin-svg-sprite) plugin.
* In order to reproduce the non-deterministic build issue

## Reproduce

> Same code build twice
> 
> The hash value may be different (if you see the same hash, please try to rebuild it a few more times)


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