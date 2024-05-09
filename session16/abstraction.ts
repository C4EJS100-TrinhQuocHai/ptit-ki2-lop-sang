 abstract class Employee {
    name:string
    constructor(name:string){
        this.name=name
    }
    // khai báo phương thức đối với abstrac
    // getFullName(){
    //     return this.name
    // }
    abstract getFullName():void;
    abstract getAge():void;
    // đối với phương thức tròn abstract thì chỉ tên phương thức, kiểu dữ liệu
    // trả về và không có phần body
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
 abstract class Employee1 extends Employee{
    address:string;
    constructor( address:string,name:string){
        super(name);
        this.address=address;
        this.name= name;
    }
 }
class Student extends Employee{
    private age:number;
    constructor(age:number,name:string){
        super(name);
        this.age=age;
        this.name=name;
    }
    getFullName(): void {
      
    }
    getAge(): void {
        
    }
}
class Person {
    name:string;
    constructor(name:string){
        this.name=name
    }
    getFullName(){

    }
}
class Person1 extends Person{
    // nếu triển khai phương thức của class cha thì gọi và overriding (ghi đè phương thức)
}
