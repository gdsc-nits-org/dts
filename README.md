# dts
### DOM To SVG

Convert a DOM Node to SVG Element.

Usage:

```js
const elem = document.getElementById("main")
const svgURI = dts(elem) // By default returns a dataURI
const svg = dts(elem, false) // Returns SVG Element
```


TODO:

- [x] Replace rollup with esbuild
- [x] Make it asynchronous
- [x] Setup simple-git-hooks
- [ ] Border Radius is not applied in image
- [ ] Box Shadows are not rendered properly
- [ ] Publist to NPM registry
- [ ] Write tests
- [ ] Document codebase and usage