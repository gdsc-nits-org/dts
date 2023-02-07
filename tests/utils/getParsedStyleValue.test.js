import { html } from "../common/setupDOM.js";
import getParsedStyleValue from "../../dist/build/utils/getParsedStyleValue.js"

test("Test: getParsedStyleValue util", () => {
    document.body.innerHTML = html;
    const node = document.getElementById("main");
    const width = getParsedStyleValue(node, 'width');
    const height = getParsedStyleValue(node, 'height');
    expect(width + "px").toBe(node.style.width);
    expect(height + "px").toBe(node.style.height);
})