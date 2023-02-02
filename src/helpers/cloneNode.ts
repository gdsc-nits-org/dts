import applystyles from "./applystyles";

/**
 * Clone all children of a DOM Node
 * While cloning, make sure the topmost node has property:
 * xmlns="http://www.w3.org/1999/xhtml".
 *
 * Apply DFS on a node and apply the css styles alongside
 * from node to clone.
 *
 * TODO: Skip cloning of nodes that are specified in filter.
 *
 * @param node Clone the DOM with their children along with all the styles.
 * @returns The cloned node
 */

function cloneNodeWithCSS(node: HTMLElement) {
	const clone = node.cloneNode(false);
	// Can't apply styles on children with true for `deep`

	if (node.childNodes.length === 0) {
		applystyles(node, clone as HTMLElement);
		return clone as HTMLElement;
	}

	node.childNodes.forEach((child) => {
		clone.appendChild(cloneNodeWithCSS(child as HTMLElement));
	});

	return clone as HTMLElement;
}

export default cloneNodeWithCSS;
