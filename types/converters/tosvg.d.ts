/**
 * Converts a DOM Node to SVG. Returns data URI by default but
 * can also return the svg node itself if `dataURI` is set to false
 * @param {HTMLElement} node - The DOM node which will be converted to SVG
 * @param {string} dataURI - If set to true(default), return dataURI, else return SVG element.
 * @returns {Promise<string | SVGSVGElement | Error>}
 */
declare function tosvg(node: HTMLElement, dataURI?: boolean): Promise<string | SVGSVGElement | Error>;
export default tosvg;
