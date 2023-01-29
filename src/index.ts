import { tosvg } from "./convertors";

function dts(node: HTMLElement, dataURI: Boolean = true){
    return tosvg(node, dataURI)
}

export default dts;