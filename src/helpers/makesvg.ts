import cloneNodeWithCSS from "./cloneNode";
import formatNode from "./formatNode";
import { calcHeight, calcWidth } from "../utils";

function makesvg(node: HTMLElement): SVGSVGElement | Error {
    const cloned: HTMLElement = cloneNodeWithCSS(node);
    formatNode(cloned);
    let svg: SVGSVGElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    svg.setAttribute("width", `${calcWidth(node)}px`);
    svg.setAttribute("height", `${calcHeight(node)}px`);

    let foreignObject: SVGForeignObjectElement = document.createElementNS(
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
