import formatNode from "../../dist/build/helpers/formatNode.js";
import { html } from "../common/setupDOM.js";

test("Test: formatNode helper", () => {
	document.body.innerHTML = html;
	const node = document.getElementById("main");
	formatNode(node);
	expect(node.getAttribute("xmlns")).toBe("http://www.w3.org/1999/xhtml");
});
