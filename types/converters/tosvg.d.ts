/**
 * Converts a DOM Node to SVG. Returns data URI by default but
 * can also return the svg node itself if `dataURI` is set to false
 *
 * @param node - The DOM node which will be converted to SVG
 * @param dataURI - If set to true(default), return dataURI, else return SVG element.
 */
declare function tosvg(node: HTMLElement, dataURI?: boolean): string | SVGSVGElement;
export default tosvg;
