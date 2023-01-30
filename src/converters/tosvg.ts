import { svg2dataURI, makesvg } from "../helpers";

/**
 * Converts a DOM Node to SVG. Returns data URI by default but
 * can also return the svg node itself if `dataURI` is set to false
 * @param {HTMLElement} node - The DOM node which will be converted to SVG
 * @param {string} dataURI - If set to true(default), return dataURI, else return SVG element.
 * @returns {Promise<string | SVGSVGElement | Error>}
 */
async function tosvg(node: HTMLElement, dataURI = true): Promise<string | SVGSVGElement | Error> {
	await Promise.resolve();
	const svg = await makesvg(node);
	if (svg instanceof Error) {
		return Error("Error in coverting DOM node to SVG");
	}
	if (dataURI) {
		return await svg2dataURI(svg);
	}
	return svg;
}

export default tosvg;
