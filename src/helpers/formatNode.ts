/* Set xmlns attribute on the node */
function formatNode(node: HTMLElement): Promise<HTMLElement | Error> {
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
