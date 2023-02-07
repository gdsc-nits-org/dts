import { html } from "../common/setupDOM.js";
import svg2dataURI from "../../dist/build/helpers/svg2dataURI.js";
import makesvg from "../../dist/build/helpers/makesvg.js";

test("Test: svg2dataURI helper", () => {
	document.body.innerHTML = html;
	const svg = makesvg(document.getElementById("main"));
	const uri = svg2dataURI(svg);
	const s = new XMLSerializer().serializeToString(svg);
	const dataURI = "data:image/svg+xml," + encodeURIComponent(s);
	expect(uri).toBeDefined();
	expect(uri).toBe(dataURI);
});
