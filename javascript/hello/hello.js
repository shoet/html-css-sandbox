
function e(templates, ...values) {
    console.log(templates);
    console.log(values);
}

function traverse(node) {
    if (node === null || node.className === undefined) {
        return;
    }
    console.log(node.className);
    let children = node.childNodes;
    for (let n of children) {
        traverse(n);
    }
}