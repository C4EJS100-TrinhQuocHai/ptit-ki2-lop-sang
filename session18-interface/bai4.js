"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // khi implements Geometry thì phải triển khai 2 phương thức của interface
    calculateArea() {
        // tính diện tích hình tròn
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        // tính chu vi của hình tròn
        return 2 * Math.PI * this.radius;
    }
}
// tạo đối tượng (intance) từ lớp  Circle
let circle1 = new Circle(5);
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() { }
    calculatePerimeter() { }
}
