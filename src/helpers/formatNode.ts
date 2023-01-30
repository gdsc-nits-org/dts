/**
 * Set xmlns attribute to "http://www.w3.org/1999/xhtml" on a DOM node
 * @param {HTMLElement} node - A DOM Node to format
 * @returns {Promise<HTMLElement>} - A Promise
 */
async function formatNode(node: HTMLElement): Promise<HTMLElement> {
	await Promise.resolve();
	node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	return node;
}

export default formatNode;
