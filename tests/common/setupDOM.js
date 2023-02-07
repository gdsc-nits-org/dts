import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const getFilePath = (filename) => {
	return path.join(__dirname, filename);
};

const parseHTML = (path) => {
	return fs.readFileSync(path, { encoding: "utf-8" }).toString();
};

const __setupHTML = getFilePath("./tests/common/html/node.html");
const html = parseHTML(__setupHTML);

export { getFilePath, parseHTML, html };
