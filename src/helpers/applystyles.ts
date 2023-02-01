/**
 * Apply styles from one node to cloned node.
 *
 * @param node - The node from which styles need to applied
 * @param cloned - The node to where styles will be applied
 */
function applystyles(node: HTMLElement, cloned: HTMLElement) {
	const styles = window.getComputedStyle(node);

	Object.values(styles).map((val: any) => {
		cloned.style.setProperty(val, styles.getPropertyValue(val), styles.getPropertyPriority(val));
	});
}

export default applystyles;
