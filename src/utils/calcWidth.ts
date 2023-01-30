import getParsedStyleValue from "./getParsedStyleValue";

/**
 * Calculate the total width of a DOM element(width + borders + margins)
 * @param {HTMLElement} node - The node whose width needs to be calculated
 * @returns {Promise<number>} - A Promise
 */
async function calcWidth(node: HTMLElement): Promise<number> {
	await Promise.resolve();
	const leftmargin = await getParsedStyleValue(node, "margin-left");
	const rightmargin = await getParsedStyleValue(node, "margin-right");
	return node.offsetWidth + leftmargin + rightmargin;
}

export default calcWidth;
