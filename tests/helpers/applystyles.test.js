import { html } from "../common/setupDOM.js";
import applystyles from "../../dist/build/helpers/applystyles.js";

test("Test: applystyles helper", () => {
	document.body.innerHTML = html;
	const styledNode = document.getElementById("main");
	const plainNode = document.getElementById("plain");
	applystyles(styledNode, plainNode);
	const styles = window.getComputedStyle(styledNode);
	const applied = window.getComputedStyle(plainNode);
	expect(styles).toBeDefined();
	expect(applied).toBeDefined();

	Object.values(styles).map((val) => {
		const valInPlain = applied.getPropertyValue(val);
		const priorityInPlain = applied.getPropertyPriority(val);
		const valInStyled = styles.getPropertyValue(val);
		const PriorityInStyled = styles.getPropertyPriority(val);

		expect(valInPlain).toBe(valInStyled);
		expect(priorityInPlain).toBe(PriorityInStyled);
	});
});
