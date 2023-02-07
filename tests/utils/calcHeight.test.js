import { html } from "../common/setupDOM";
import getParsedStyleValue from "../../dist/build/utils/getParsedStyleValue.js";
import calcHeight from "../../dist/build/utils/calcHeight.js"


test("Test: calcHeight util", () => {
    document.body.innerHTML = html;
    const node = document.getElementById("main");
    const height = calcHeight(node);
    const margin = getParsedStyleValue(node, "margin-top") + getParsedStyleValue(node, "margin-bottom")
    expect(height).toBe(node.offsetHeight + margin)
})