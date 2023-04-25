
let result = document.querySelector('.result');
document.querySelector('.btn').addEventListener('click', function() {
    let formData = new FormData(document.querySelector('.my-form'));
    for (let value of formData.entries()) {
        console.log(value);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts/', {
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
    })
    .then(res => {
        // console.log(res.text());
        // return res.json();
        return res.text();
    })
    .then(text => result.textContent = text);
}, false)