/**
 * While `makesvg` can create a svg DOM node out an ordinary DOM node,
 * SVGs in data URIs are smaller than the base64 encoded SVGs.
 *
 * References:
 * - https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
 * - https://css-tricks.com/probably-dont-base64-svg/
 * - https://gist.github.com/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
 * - https://youtu.be/dUhP4JWgwdo
 *
 * This helper function converts an SVG DOM Node to a data URI.
 * @param {SVGSVGElement} svg - The SVG Element to convert from.
 * @returns {Promise<string>} - The dataURI string
 */

async function svg2dataURI(svg: SVGSVGElement): Promise<string> {
	await Promise.resolve();
	let s = new XMLSerializer().serializeToString(svg);
	let dataURI = "data:image/svg+xml," + encodeURIComponent(s);
	return dataURI;
}

export default svg2dataURI;
