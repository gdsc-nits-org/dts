import { tosvg } from "./converters";

async function dts(node: HTMLElement, dataURI: Boolean = true) {
	return await tosvg(node, dataURI);
}

export default dts;
