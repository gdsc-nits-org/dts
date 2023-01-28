import cloneNode from "./cloneNode";

function makesvg(node: HTMLElement): SVGSVGElement | Error {
    const cloned: HTMLElement | null = cloneNode(node);

    if(cloned == null)
        return Error("Null cloned element.")

    let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    svg.setAttribute("width", `${node.clientWidth}`)
    svg.setAttribute("height", `${node.clientHeight}`)

    let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.appendChild(cloned)
    svg.appendChild(foreignObject);
    foreignObject.setAttribute("width", "100%")
    foreignObject.setAttribute("height", "100%")

    return svg;
}

export default makesvg;