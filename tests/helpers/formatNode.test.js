import { JSDOM } from "jsdom";
import formatNode from "../../dist/build/helpers/formatNode.js";
import { parseHTML, getFilePath } from "../common/setupDOM.js";

const htmlNode = getFilePath("tests/common/testNode.html");
const __htmlNode = parseHTML(htmlNode);

const domNode = new JSDOM(__htmlNode).window.document.getElementById("main");
await formatNode(domNode);

export { domNode };
