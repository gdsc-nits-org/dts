import cloneNodeWithCSS from "./cloneNode";
import formatNode from "./formatNode";
import { calcHeight, calcWidth } from "../utils";

/**
 * Convert a DOM Node to an SVG Element
 *
 * @param node -The DOM Node to convert to SVG
 * @returns A Promise
 */
function makesvg(node: HTMLElement) {
	const cloned = cloneNodeWithCSS(node);
	formatNode(cloned);

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", `${calcWidth(node)}px`);
	svg.setAttribute("height", `${calcHeight(node)}px`);

	const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
	foreignObject.appendChild(cloned);
	foreignObject.setAttribute("width", "100%");
	foreignObject.setAttribute("height", "100%");

	svg.appendChild(foreignObject);

	return svg;
}

export default makesvg;
