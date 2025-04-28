function add(a, d) {
    return a + b;
}

//関数式
let sayHi = function hi() {
    return "hi";
}
// console.log(sayHi);

sayHi = function () {

}

const person = {
    name: 'yosiki',
    Hi: function () {
        return 'hi';
    }
};

//アロー関数
sayHi = (name) => {
    return `Hi ${name}!`;
}

//一つの式しか返さない場合の省略
// sayHi = (name) => `Hi ${name}!`;


sayHi = (name, message = 'i like cake') => `Hi ${name}! ${message}`;

console.log(sayHi('kaito'));

//無限引数
let sum = (...nums) => {
    let total = 0;
    for (num of nums) {
        total += num;
    }
    return total;
};
// console.log(sum(1., 3, 5, 3));

//コールバック関数
let subtrack = (a, b, callback) => {
    let result = a - b;
    callback('hello');
};
subtrack(10, 3, (result) => {
    console.log(result);

});

subtrack(10, 4, (result) => {
    // alert(result);

});

//配列
let fruits = ['apple', 'banana'];
fruits[2] = 'grape';
fruits[10] = 'orange';
delete fruits[10];
fruits["hello"] = 'hello'
fruits.length = 20;
console.log(fruits);


let fr = ['apple', , 'banana', 'orange'];
for (const fruit of fr) {
    // console.log(fruit);

}
fruit = [[1, 2, 3], [4, 5, 6],];
console.log(fruit[1][2]);

fru = ['apple', 'banana', 'grape'];
const newFruits = [...fru, 'mango', 'peach'];
fru.push('orange');
console.log(newFruits, fru);

const kaito = ['kaito', 20];
let [name, age] = kaito;
console.log(name, age);


items = ['apple', 'banana', 'grape'];
items.forEach((item) => {
    console.log(item);

});