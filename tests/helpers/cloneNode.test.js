import { html } from "../common/setupDOM.js";
import cloneNodeWithCSS from "../../dist/build/helpers/cloneNode.js";

test("Test: applystyles helper", () => {
	document.body.innerHTML = html;
	const node = document.getElementById("main");
	const cloned = cloneNodeWithCSS(node);
	expect(cloned).toBeDefined();
	expect(cloned).toStrictEqual(node);
});
