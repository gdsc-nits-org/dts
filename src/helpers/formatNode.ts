/**
 * Set `xmlns` attribute to "http://www.w3.org/1999/xhtml" on a DOM node
 *
 * @param node - A DOM Node to format
 * @returns The node with formatting
 */
function formatNode(node: HTMLElement) {
	node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	return node;
}

export default formatNode;
