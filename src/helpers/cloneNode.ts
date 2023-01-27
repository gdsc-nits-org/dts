import formatNode from "./formatNode";

/*
Clone all children of a DOM Node
While cloning, make sure the topmost node has property:
xmlns="http://www.w3.org/1999/xhtml".

TODO: Skip cloning of nodes that are specified in filter.
*/

function cloneNode(node: Element): Element | null {
    let clone = document.createElement(node.tagName)
    formatNode(clone);
    for(let i = 0; i < node.attributes.length; i++){
        const attribute = node.attributes[i]
        clone.setAttribute(attribute.name, attribute.value)
    }
    for(let i = 0; i < node.children.length; i++){
        clone.appendChild(node.childNodes[i].cloneNode(true))
    }
    return clone
}

export default cloneNode;