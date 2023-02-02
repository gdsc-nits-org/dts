import { tosvg } from "./converters";

function dts(node: HTMLElement | undefined | null, dataURI = true) {
	if (!node || !(node instanceof HTMLElement) || typeof dataURI !== "boolean") {
		return null;
	}

	return tosvg(node, dataURI);
}

export default dts;
