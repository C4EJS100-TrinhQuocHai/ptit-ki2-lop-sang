"use strict";
class Person {
    constructor(name, address) {
        // không cần để super
        this.name = name;
        this.address = address;
    }
    // bắt buộc phải triển khai phương thức sale trong interface
    sale() {
        return "giảm giá 5%";
    }
    sale1() {
        return "giảm giá 15%";
    }
}
// khi dùng type có thể dùng các kiểu kết hợp được không?
let name1;
