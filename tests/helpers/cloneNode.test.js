import { html } from "../common/setupDOM.js";
import cloneNodeWithCSS from "../../dist/build/helpers/cloneNode.js";

test("Test: CloneNodeWithCSS helper", () => {
	document.body.innerHTML = html;
	const node = document.getElementById("main");
	const cloned = cloneNodeWithCSS(node);
	expect(cloned).toBeDefined();
	const nodeStyles = window.getComputedStyle(node);
	const cloneStyles = window.getComputedStyle(cloned);
	Object.values(nodeStyles).map((val) => {
		expect(nodeStyles.getPropertyValue(val)).toStrictEqual(cloneStyles.getPropertyValue(val));
	});
});
