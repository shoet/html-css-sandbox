
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

var errorToggle = false;
function fetchTest() {
    if (errorToggle) {
        url = 'https://httpb.org/get';
    } else {
        url = 'https://httpbin.org/get';
    }
    fetch(url, {method: 'GET'})
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('error');
        })
        .then(data => console.log(data))
        .catch(e => window.alert(e));
    errorToggle = !errorToggle;
}