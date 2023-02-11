# dts
## DOM To SVG

Convert a DOM Node to SVG Element.

### Try on [CodePen](https://codepen.io/jdeepd/pen/BaPXRev)

## Usage:

### For running in Client side, simply use the CDN script:
```js
import dts from "https://cdn.jsdelivr.net/npm/@gdscnits/dts@latest/dist/index.min.js";
const elem = document.getElementById("main")
// console.log(dts(elem)); // to get URI
console.log(dts(elem, false)); // to get svg
```

### For Installing locally:

```console
npm i @gdscnits/dts
```

```js
// File: index.js
import dts from "@gdscnits/dts";
const elem = document.getElementById("main")
// console.log(dts(elem)); // to get URI
console.log(dts(elem, false)); // to get svg
```

Build the script using `esbuild` and `browserify`(Install them as dependencies). In `package.json`,
put the following lines:

```json
  "scripts": {
    "bundle": "esbuild index.js --bundle --sourcemap --target=chrome58,firefox57,safari11,edge16 --outfile=bundle.js"
  },
  "type": "module"
```

In the HTML file, include `bundle.js` as script.
```html
<script src="./bundle.js"></script>
```


For React components, create a ref for the div whose SVG is needed.
```jsx
import dts from "@gdscnits/dts";
import { useRef } from "react";

const Component = () => {
    const divref = useRef(null);
    const getSVG = () => {
        if(divref == null) return;
        // const svg = dts(divref) // to get URI
        const svg = dts(divref, false) // to get SVG
        console.log(svg)
    }
    return (
        <div className="main">
            {/* Click on this button to console log the SVG for divref */}
            <button onClick={getSVG}>
                Click me to get SVG
            </button>
            <div className="div_whose_SVG_is_needed" ref={divref}>
                <div className="styling">
                {/*...*/}
                </div>
            </div>
        </div>
    )
}

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

### Additional
4. View Docs
```sh
pnpm docs
```

5. Build Docs
```sh
pnpm run docs
```

6. Run test
```sh
pnpm test
```

TODO:

- [x] Replace rollup with esbuild
- [x] Make it asynchronous
- [x] Setup simple-git-hooks
- [x] Border Radius applied in image
- [ ] ~Box Shadows are not rendered properly~(Box Shadows not feasable with SVG)
- [x] Make it work with React components
- [x] Publish to NPM registry
- [x] Setup tests
- [x] Test all helpers
- [x] Document codebase and usage


## Credit to where its due:
[dom-to-image](https://github.com/tsayen/dom-to-image)