import getParsedStyleValue from "./getParsedStyleValue";
/*
Calculate the total height of a DOM element(height + borders + margins)
*/

async function calcHeight(node: HTMLElement): Promise<number> {
	await Promise.resolve();
	const topmargin = await getParsedStyleValue(node, "margin-top");
	const bottommargin = await getParsedStyleValue(node, "margin-bottom");
	return node.offsetHeight + topmargin + bottommargin;
}

export default calcHeight;
