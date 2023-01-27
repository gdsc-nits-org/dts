/* Set xmlns attribute on the node */
function formatNode(node: HTMLElement | null): Promise<HTMLElement> | Error {
  if (node == null) return new Error("HTML Element is null or undefined.");
  return new Promise((resolve, reject) => {
    try {
      node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
      resolve(node);
    } catch (err) {
      reject(err);
    }
  });
}

export default formatNode;
