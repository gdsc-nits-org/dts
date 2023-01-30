import applystyles from "./applystyles";

/*
Clone all children of a DOM Node
While cloning, make sure the topmost node has property:
xmlns="http://www.w3.org/1999/xhtml".

Apply DFS on a node and apply the css styles alongside
from node to clone.

TODO: Skip cloning of nodes that are specified in filter.
*/

function cloneNodeWithCSS(node: HTMLElement): HTMLElement {
	if (node.childNodes.length == 0) {
		return node.cloneNode(false) as HTMLElement;
	}
	let clone = node.cloneNode(false);
	applystyles(node, clone as HTMLElement);
	let children: HTMLElement[] = [];
	node.childNodes.forEach((_node, _ind) => {
		children.push(cloneNodeWithCSS(_node as HTMLElement));
	});
	children.forEach((_cnode, _ind) => {
		clone.appendChild(_cnode);
	});
	return clone as HTMLElement;
}

export default cloneNodeWithCSS;
