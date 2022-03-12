"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 20;
const b = 30;
const c = 30;
const name = "Du Dinh Dat";
const status = true;
const info = {};
const arr = ['a', 'b', 'c'];
const Numberarr = [1, 2, 3];
const objectArr = [{ id: 1, name: 'Dinh Dat' }, { id: 2, name: 'Dao Thi' }];
function sum(numA, numB) {
    return numA + numB;
}
sum(a, b);
console.log(objectArr);
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
];
function show(products) {
    const result = products.map(item => `<div>${item.name}</div>`);
}
show(products);
function sum2(a, b, callback) {
    return a + b;
}
