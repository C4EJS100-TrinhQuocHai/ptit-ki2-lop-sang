"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abstraction
// thêm từ khóa abstrac vào đầu class
// intance: 
// let emp1= new Employee("trang");
// emp1 được gọi là 1 intance của class Employee
// đối với abstraction thì không cho phép khởi tạo đối tượng(intance) được
/*
    tạo 1 class con kế thừa class Employee
    implement : triển khai
    bắt buộc phải triển khai tất cả các phương thức của class cha (abstract)
 */
class Employee1 extends Employee {
    constructor(address, name) {
        super(name);
        this.address = address;
        this.name = name;
    }
}
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullName() {
    }
    getAge() {
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    getFullName() {
    }
}
class Person1 extends Person {
}
