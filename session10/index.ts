/* 
    OOP:  lập trình hướng đối tượng
    Object oriented progaram
    là mô hình lập trình dựa vào các đối tượng thực tế
    đối tượng con mèo, đối tượng cái xe ô tô, cái bàn, cái máy tính.....
    1 đối tượng sẽ gồm thuộc tính và phương thức
    ví dụ đối tượng con mèo
    thuộc tính: màu lông, màu mắt, nặng,......
    phương thức: bắt chuột, chạy, nhảy......
    ví dụ về đối tượng cái xe ô tô
    thuộc tính:
    phương thức: 

    Cách  tạo đối  tượng
    1. dùng let, const, var
    let student={

    }
    2.dùng new Object()
    3.dùng hàm tạo constructor ==> dùng từ khóa new
    4. dùng class

 */
 // yêu cầu tạo 1 đối tượng student
  class Student {
    // khai báo các thuộc tính
    name11:string
    age11:number
    constructor(name:string,age:number){// minh thu, 5
        this.name11=name; // name11: minh thu
        this.age11=age; //age11: 5
    }
    // khai báo các phương thức
    // ví dụ thầy có phương thức get Name
    getName(): string{
        console.log(`xin chào ${this.name11}`);
        return this.name11
    }
    getAge():void{
        console.log("");
    }
  }
  // tạo đối tượng dùng từ khóa new 
  let std1= new Student("minh thu",5);// instance
  console.log("11111",std1);
  // lấy thuộc tính :
  // đối tượng . thuộc tính
  console.log("đối tượng std1 có thuộc tính name giá trị là",std1.name11);
  // gọi phương thức
  // đối tượng. phương thức
  console.log("gọi phương thức getName",std1.getName());
  
  /* 
    Các tính chất của lập trình hướng đối tượng
    4 tính chất
    1. đóng gói : encapsulation
    2. kế thừa : inheritance
    3. đa hình : polymorphysm
    4. tính trừu tượng: abstraction 
  */
  
