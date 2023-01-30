/**
 * Calculate the total width of a DOM element(width + borders + margins)
 * @param {HTMLElement} node - The node whose width needs to be calculated
 * @returns {Promise<number>} - A Promise
 */
declare function calcWidth(node: HTMLElement): Promise<number>;
export default calcWidth;
