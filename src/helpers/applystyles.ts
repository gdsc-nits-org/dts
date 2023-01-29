/*
Apply styles from one node to cloned node.
*/

function applystyles(node: HTMLElement, cloned: HTMLElement): void {
    const styles = window.getComputedStyle(node);
    Object.keys(styles).map((val: any) => {
        cloned.style[val] = styles[val];
    });
}

export default applystyles;
