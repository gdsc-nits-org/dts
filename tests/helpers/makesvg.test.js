import { html } from "../common/setupDOM.js";
import makesvg from "../../dist/build/helpers/makesvg.js";

test("Test: makesvg helper", () => {
	document.body.innerHTML = html;
	const node = document.getElementById("main");
	const svg = makesvg(node);
	const fObject = svg.getElementById("main");
	expect(svg).toBeDefined();
	expect(svg.tagName).toBe("svg");
	node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	expect(fObject).toEqual(node);
});
