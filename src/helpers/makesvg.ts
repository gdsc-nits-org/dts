import cloneNodeWithCSS from "./cloneNode";
import formatNode from "./formatNode";
import { calcHeight, calcWidth } from "../utils";

/**
 * Convert a DOM Node to an SVG Element
 * @param {HTMLElement} node -The DOM Node to convert to SVG
 * @returns {Promise<SVGSVGElement>} - A Promise
 */
async function makesvg(node: HTMLElement): Promise<SVGSVGElement> {
	const cloned: HTMLElement = cloneNodeWithCSS(node);
	await formatNode(cloned);
	const svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", `${await calcWidth(node)}px`);
	svg.setAttribute("height", `${await calcHeight(node)}px`);

	const foreignObject: SVGForeignObjectElement = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"foreignObject"
	);
	foreignObject.appendChild(cloned);
	svg.appendChild(foreignObject);
	foreignObject.setAttribute("width", "100%");
	foreignObject.setAttribute("height", "100%");

	return svg;
}

export default makesvg;
