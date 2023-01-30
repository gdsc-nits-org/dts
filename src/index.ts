import { tosvg } from "./converters";

async function dts(node: HTMLElement, dataURI = true) {
	return tosvg(node, dataURI);
}

export default dts;
