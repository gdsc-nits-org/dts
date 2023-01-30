/**
 * Apply styles from one node to cloned node.
 * @param {HTMLElement} node - The node from which styles need to applied
 * @param {Promise<void>} cloned - The node to where styles will be applied
 */
declare function applystyles(node: HTMLElement, cloned: HTMLElement): Promise<void>;
export default applystyles;
