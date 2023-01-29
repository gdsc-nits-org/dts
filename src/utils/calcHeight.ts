import getParsedStyleValue from "./getParsedStyleValue";
/*
Calculate the total height of a DOM element(height + borders + margins)
*/

function calcHeight(node: HTMLElement){
    const topmargin = getParsedStyleValue(node, 'margin-top')
    const bottommargin = getParsedStyleValue(node, 'margin-bottom')
    return node.offsetHeight + topmargin + bottommargin
}

export default calcHeight;