/**
 * Calculate the total height of a DOM element(height + borders + margins)
 * @param {HTMLElement} node The node whose height needs to be calculated
 * @returns {Promise<number>} - A Promise
 */
declare function calcHeight(node: HTMLElement): Promise<number>;
export default calcHeight;
