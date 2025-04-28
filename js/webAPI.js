// alert('hello')
// let result = confirm('thankyou')
// let result = prompt('name', 'ここにかけ')
// console.log(result);

let url = new URL('https://www.udemy.com/');
console.log(url);

let timer = setTimeout(() => {
    console.log("hello");

}, 2000);
clearTimeout(timer)

let timeID = setInterval(() => {
    console.log("hello");

}, 1000);
setTimeout(() => {
    clearInterval(timeID)
}, 5000);

getSelection().toString()


