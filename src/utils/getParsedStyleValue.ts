/**
 * For a given node and a node.style property,
 * convert the pixel value string to float.
 *
 * @example
 * ```ts
 * getParsedStyleValue(node, 'width'); //returns width of node in float.
 * ```
 *
 * @param node - The node whose property value needs to be parsed.
 * @param property - The property which needs to be parsed.
 * @returns
 */
function getParsedStyleValue(node: HTMLElement, property: string) {
	const value = getComputedStyle(node).getPropertyValue(property);
	return parseFloat(value.replace("px", ""));
}

export default getParsedStyleValue;
