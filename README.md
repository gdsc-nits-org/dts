# dts
### DOM To SVG

Convert a DOM Node to SVG Element.

### Usage:

```js
import dts from "@gdscnits/dts";

(async() => {
    const elem = document.getElementById("main")
    console.log(await dts(elem, false))
})();
```

### Setup Locally
1. Clone the repository
```sh
git clone https://github.com/gdsc-nits-org/dts.git
```
2. Install dependencies(this project uses pnpm, but you can use your favourite package manager)
```sh
pnpm install
```
3. Build the project
```sh
pnpm run esbuild
```

#### Additional
4. Setup Docs
```sh
pnpm run docs
```

TODO:

- [x] Replace rollup with esbuild
- [x] Make it asynchronous
- [x] Setup simple-git-hooks
- [ ] Border Radius is not applied in image
- [ ] Box Shadows are not rendered properly
- [ ] Publish to NPM registry
- [ ] Write tests
- [x] Document codebase and usage