/**
 * For a given node and a node.style property,
 * convert the pixel value string to float.
 * Example:
 * getParsedStyleValue(node, 'width') -> returns width of node in float.
 * @param {HTMLElement} node - The node whose property value needs to be parsed.
 * @param {string} property - The property which needs to be parsed.
 * @returns {Promise<number>} - A Promise
 */
async function getParsedStyleValue(node: HTMLElement, property: string): Promise<number> {
	await Promise.resolve();
	let value = window.getComputedStyle(node).getPropertyValue(property);
	return parseFloat(value.replace("px", ""));
}

export default getParsedStyleValue;
