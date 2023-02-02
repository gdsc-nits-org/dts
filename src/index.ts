import { tosvg } from "./converters";

function dts(node: HTMLElement | undefined, dataURI = true) {
	if (!node || !(node instanceof HTMLElement) || typeof dataURI !== "boolean") {
		return "";
	}
	return tosvg(node, dataURI);
}

export default dts;
