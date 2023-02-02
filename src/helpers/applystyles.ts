/**
 * Apply styles from one node to cloned node.
 *
 * @param node - The node from which styles need to applied
 * @param cloned - The element to where styles will be applied
 */
function applystyles(node: Node, cloned: HTMLElement) {
	// Check if node is really element
	if (node.nodeType !== node.ELEMENT_NODE) {
		return;
	}

	const styles = getComputedStyle(node as Element);

	Object.values(styles).map((val) => {
		cloned.style.setProperty(val, styles.getPropertyValue(val), styles.getPropertyPriority(val));
	});
}

export default applystyles;
