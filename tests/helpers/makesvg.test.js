import { html } from "../common/setupDOM.js";
import makesvg from "../../dist/build/helpers/makesvg.js";

test("Test: formatNode helper", () => {
	document.body.innerHTML = html;
	const node = document.getElementById("main");
	makesvg(node);
});
