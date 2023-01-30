import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const getFilePath = (filename) => {
	return path.join(__dirname, filename);
};

const parseHTML = (path) => {
	return fs.readFileSync(path, { encoding: "utf-8" }).toString();
};

const __setupHTML = getFilePath("tests/common/setup.html");
var html = parseHTML(__setupHTML);

const dom = new JSDOM(html);
const document = dom.window.document.getElementById("testzone");

export { getFilePath, parseHTML, document };
