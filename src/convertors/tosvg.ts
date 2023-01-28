/*
Converts a DOM Node to SVG. Returns data URI by default but
can also return the svg node itself if `dataURI` is set to false
*/
import { svg2dataURI, makesvg } from "../helpers";

function tosvg(node: HTMLElement, dataURI: Boolean = true) : string| SVGSVGElement | Error {
    const svg = makesvg(node);
    if(svg instanceof Error) return Error("Error in coverting DOM node to SVG")
    if(dataURI) return svg2dataURI(svg);
    return svg
}

export default tosvg;