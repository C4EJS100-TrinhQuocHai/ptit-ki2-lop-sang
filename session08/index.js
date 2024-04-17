"use strict";
/*
    1. union   : kiểu  kết hợp |

    2. intersection : kiểu kết hợp &

 */
let a = 5;
a = "hồng";
// tham chiếu ( array);
let numbers = [1, 2, 3, 5,];
let b = 6;
let obj = {
    name: "hoa",
    address: "hà nội",
    phone: "09875666"
};
let obj1 = {
    name: "hồng",
    address: "hcm",
    phone: "5555",
    email: 'hong@gmail.com'
};
function parseInput(input) {
    switch (input) {
        case "number":
            return 24;
        case "boolean":
            return true;
        case "string":
            return "Hi!";
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            throw new Error("chiu chiu");
    }
}
// Ví dụ sử dụng
console.log(parseInput("number"));
console.log(parseInput("boolean"));
console.log(parseInput("string"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));
// function viết theo quy tắc camel case
function types(obj) {
    return (typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "string");
}
let std = {
    name: "Trang",
    age: 18,
    address: "sơn la",
};
console.log(1111, types(std));
let c = {
    name: 1,
    age: 18,
    address: "sơn la",
};
console.log(22222, types(c));
// alias
let userName; // đây là union
// tuple
let array = ["hoa", "minh"];
let array1;
array1 = [2, "2"];
array1.push(6);
function test() {
}
console.log(1111, typeof (test));
