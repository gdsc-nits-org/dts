import { html } from "../common/setupDOM.js";
import getParsedStyleValue from "../../dist/build/utils/getParsedStyleValue.js";
import calcWidth from "../../dist/build/utils/calcWidth.js";

test("Test: calcWidth util", () => {
	document.body.innerHTML = html;
	const node = document.getElementById("main");
	const width = calcWidth(node);
	const margin = getParsedStyleValue(node, "margin-left") + getParsedStyleValue(node, "margin-right");
	expect(width).toBe(node.offsetHeight + margin);
});
