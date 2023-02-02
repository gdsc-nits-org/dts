import { svg2dataURI, makesvg } from "../helpers";

/**
 * Converts a DOM Node to SVG. Returns data URI by default but
 * can also return the svg node itself if `dataURI` is set to false
 *
 * @param node - The DOM node which will be converted to SVG
 * @param dataURI - If set to true(default), return dataURI, else return SVG element.
 */
function tosvg(node: HTMLElement, dataURI = true) {
	const svg = makesvg(node);

	if (dataURI) {
		return svg2dataURI(svg);
	}

	return svg;
}

export default tosvg;
