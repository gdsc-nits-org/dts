/*
Apply styles from one node to cloned node.
*/

async function applystyles(node: HTMLElement, cloned: HTMLElement): Promise<void> {
	await Promise.resolve();
	const styles = window.getComputedStyle(node);
	Object.keys(styles).map((val: any) => {
		cloned.style.setProperty(val, styles.getPropertyValue(val), styles.getPropertyPriority(val));
	});
}

export default applystyles;
