/**
 * Apply styles from one node to cloned node.
 * @param {HTMLElement} node - The node from which styles need to applied
 * @param {Promise<void>} cloned - The node to where styles will be applied
 */

async function applystyles(node: HTMLElement, cloned: HTMLElement): Promise<void> {
	await Promise.resolve();
	const styles = window.getComputedStyle(node);
	Object.keys(styles).map((val: any) => {
		cloned.style.setProperty(val, styles.getPropertyValue(val), styles.getPropertyPriority(val));
	});
}

export default applystyles;
