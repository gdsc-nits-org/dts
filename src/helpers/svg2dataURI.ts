/*
 * References:
 * - https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
 * - https://css-tricks.com/probably-dont-base64-svg/
 * - https://gist.github.com/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
 * - https://youtu.be/dUhP4JWgwdo
 *
 */

/**
 * While `makesvg` can create a svg DOM node out an ordinary DOM node,
 * SVGs in data URIs are smaller than the base64 encoded SVGs.
 *
 * This helper function converts an SVG DOM Node to a data URI.
 *
 * @param svg - The SVG Element to convert from.
 * @returns The dataURI string
 */

function svg2dataURI(svg: SVGSVGElement) {
	const s = new XMLSerializer().serializeToString(svg);
	const dataURI = "data:image/svg+xml," + encodeURIComponent(s);
	return dataURI;
}

export default svg2dataURI;
