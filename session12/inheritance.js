"use strict";
/*
     Tính kế thừa
     là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có các
     thuộc tính và phương thức của lớp cha.
     Giup tái  sử dụng lại đoạn code
     1 class con có kể kế thừa bao nhiêu class cha
     ==> 1 class cha
     1 con thì có bao nhiêu cha==>1
     1 class cha có thể cho bao nhiêu class con kế thừa
     ==> nhiều
     1 cha có bao nhiêu con
     ==> nhiều

 */
// khai báo class cha
class Parent {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    // khai báo cho class parent có phương thức showInfo
    showInfo() {
        return `xin chào ${this.name}`;
    }
    // phương thức thay đổi name
    setName(newName) {
        this.name = newName;
    }
}
// khởi tạo class con kế thừa class cha
// để kế thừa dùng từ khóa extends
class Child extends Parent {
    constructor(name, id, age) {
        super(name, id); // phải đặt trên đầu của constructor
        this.name = name;
        this.id = id;
        this.age = age;
    }
    // ghi đè phương thức : override | overwrite
    showInfo() {
        return `${this.name} năm nay ${this.age} tuổi!`;
    }
}
// khởi tạo đối tượng con
let child1 = new Child("huyền trang", 11, 20);
// khi class Child kế thừa class Parent thì sẽ kế thừa các thuộc tính và phương thức
// của nó
// console.log("1111111",child1.showInfo());
child1.setName("sơn tùng");
console.log("tên mới", child1.name);
// gọi phương  thức showInfo
console.log(222222, child1.showInfo());
