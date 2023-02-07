/**
 * While `makesvg` can create a svg DOM node out an ordinary DOM node,
 * SVGs in data URIs are smaller than the base64 encoded SVGs.
 *
 * This helper function converts an SVG DOM Node to a data URI.
 *
 * @param svg - The SVG Element to convert from.
 * @returns The dataURI string
 */
declare function svg2dataURI(svg: SVGSVGElement): string;
export default svg2dataURI;
