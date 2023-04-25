
formData = {
    'hoge': 'fuga'
};

fetch('https://httpbin.org/get', {
    method: 'GET'
})
.then(res => {
    return res.json();
})
.then(data => console.log(data));