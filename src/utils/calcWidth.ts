import getParsedStyleValue from "./getParsedStyleValue";
/*
Calculate the total width of a DOM element(width + borders + margins)
*/

function calcWidth(node: HTMLElement) {
    const leftmargin = getParsedStyleValue(node, "margin-left");
    const rightmargin = getParsedStyleValue(node, "margin-right");
    return node.offsetWidth + leftmargin + rightmargin;
}

export default calcWidth;
