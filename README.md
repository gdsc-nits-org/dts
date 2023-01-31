# dts
### DOM To SVG

Convert a DOM Node to SVG Element.

### Install from npm registry

```console
npm i @gdscnits/dts
```

### Usage:

```js
import dts from "@gdscnits/dts";

(async() => {
    const elem = document.getElementById("main")
    // console.log(await dts(elem)); // to get URI
    console.log(await dts(elem, false)); // to get svg
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
pnpm esbuild
```

#### Additional
4. Setup Docs
```sh
pnpm docs
```
5. Run test
```sh
pnpm test
```

TODO:

- [x] Replace rollup with esbuild
- [x] Make it asynchronous
- [x] Setup simple-git-hooks
- [ ] Border Radius is not applied in image
- [ ] Box Shadows are not rendered properly
- [ ] Publish to NPM registry
- [x] Setup tests
- [ ] Test all helpers
- [x] Document codebase and usage


## Credit to where its due:
[dom-to-image](https://github.com/tsayen/dom-to-image)