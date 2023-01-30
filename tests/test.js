import { domNode, domNode as formattedNode } from "./helpers/formatNode.test.js";
import chai from "chai";

describe("Test formatNode", () => {
	context("format a DOM node", () => {
		it("should be a string", () => {
			chai.expect(domNode.getAttribute("xmlns")).to.be.a("string");
		});
		it("should be http://www.w3.org/1999/xhtml", () => {
			chai.expect(domNode.getAttribute("xmlns")).to.equal("http://www.w3.org/1999/xhtml");
		});
	});
});
