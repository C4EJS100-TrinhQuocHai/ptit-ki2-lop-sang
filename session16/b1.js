"use strict";
/*
    Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và
    phương thức abstract getSize.
    Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
    Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha,
    phương thức getSize để in ra các kích cỡ của hình trong lớp con.

 */
class Shape {
    constructor(name) {
        this.name = name;
    }
    // viết theo phương thức normal
    getName() {
        // lấy ra tên của hình
        return ` hình là ${this.name}`;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("chiều dài",this.width);
        console.log("chiều rộng",this.height);
        // return ` chiều dài: ${this.width} và chiều rộng: ${this.height}`
    }
}
let rectangle1 = new Rectangle("hình chữ nhật", 5, 6);
console.log("tên ", rectangle1.getName());
rectangle1.getSize();

