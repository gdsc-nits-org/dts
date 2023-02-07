import { html } from "../common/setupDOM.js";
import applystyles from "../../dist/build/helpers/applystyles.js";

test("Test: applystyles helper", () => {
	document.body.innerHTML = html;
	const styled_node = document.getElementById("main");
	const plain_node = document.getElementById("plain");
	applystyles(styled_node, plain_node);
	const styles = window.getComputedStyle(styled_node);
	const applied = window.getComputedStyle(plain_node);
	expect(styles).toBeDefined();
	expect(applied).toBeDefined();

	Object.values(styles).map((val, index) => {
		const valInPlain = applied.getPropertyValue(val);
		const priorityInPlain = applied.getPropertyPriority(val);
		const valInStyled = styles.getPropertyValue(val);
		const PriorityInStyled = styles.getPropertyPriority(val);

		expect(valInPlain).toBe(valInStyled);
		expect(priorityInPlain).toBe(PriorityInStyled);
	});
});
