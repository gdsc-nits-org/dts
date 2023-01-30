/**
 * Set xmlns attribute to "http://www.w3.org/1999/xhtml" on a DOM node
 * @param {HTMLElement} node - A DOM Node to format
 * @returns {Promise<HTMLElement>} - A Promise
 */
declare function formatNode(node: HTMLElement): Promise<HTMLElement>;
export default formatNode;
