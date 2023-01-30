/**
 * Clone all children of a DOM Node
 * While cloning, make sure the topmost node has property:
 * xmlns="http://www.w3.org/1999/xhtml".
 *
 * Apply DFS on a node and apply the css styles alongside
 * from node to clone.
 *
 * TODO: Skip cloning of nodes that are specified in filter.
 * @param {HTMLElement} node Clone the DOM with their children along with all the styles.
 * @returns {HTMLElement} - The cloned node
 */
declare function cloneNodeWithCSS(node: HTMLElement): HTMLElement;
export default cloneNodeWithCSS;
