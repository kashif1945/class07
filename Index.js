"use strict";
//write a program to calculate sum from 1 to 100 and print the list of valuses of sum
var sum = 0;
let list = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        list.push(i);
    }
}
console.log(sum, list);
