/* Set xmlns attribute on the node */
async function formatNode(node: HTMLElement): Promise<HTMLElement> {
	await Promise.resolve();
	node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	return node;
}

export default formatNode;
