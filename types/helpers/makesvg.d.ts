/**
 * Convert a DOM Node to an SVG Element
 * @param {HTMLElement} node -The DOM Node to convert to SVG
 * @returns {Promise<SVGSVGElement>} - A Promise
 */
declare function makesvg(node: HTMLElement): Promise<SVGSVGElement>;
export default makesvg;
