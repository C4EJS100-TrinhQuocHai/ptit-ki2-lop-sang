
/* 
    1. union   : kiểu  kết hợp |

    2. intersection : kiểu kết hợp &

 */
let a:number|string|undefined=5;
a="hồng";
// tham chiếu ( array);
let numbers: (number|string)[]=[1,2,3,5,];
let b:number=6;
// 
type A={
    name:string,
    address:string,
    phone:string
}
type B={
    email:string,
    name:string,
}
type C= A&B;
let obj:A={
    name:"hoa",
    address:"hà nội",
    phone:"09875666"
}
let obj1:C={
    name:"hồng",
    address:"hcm",
    phone:"5555",
    email:'hong@gmail.com'
}
function parseInput(input: string): number | boolean | string | null | undefined {
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
function types(obj: any): boolean {
    return (
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "string"
    );
}
let std = {
    name: "Trang",
    age: 18,
    address: "sơn la",
};
console.log(1111,types(std));
let c = {
    name: 1,
    age: 18,
    address: "sơn la",
};
console.log(22222,types(c));
// alias
let userName:string|number; // đây là union
 type user =string|number;// kiểu alias(bí danh);

// tuple
let array:(number|string)[]=["hoa","minh"];
let array1 : [number,string];
array1=[2,"2"];
array1.push(6);
function test(){

}
console.log(1111,typeof(test));
