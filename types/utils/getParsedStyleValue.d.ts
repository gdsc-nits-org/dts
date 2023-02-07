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
 * @returns {number}
 */
declare function getParsedStyleValue(node: HTMLElement, property: string): number;
export default getParsedStyleValue;
