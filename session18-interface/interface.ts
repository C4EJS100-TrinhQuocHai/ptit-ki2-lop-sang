/* 
    interface: giao diện 
    dùng để định nghĩa các thuộc tính và phương thức các lớp con
    kế thừa bắt buộc phải triển khai 
    ==> cũng giống như abstract 
    - có những điểm gì khác nhau so với abstract
    - để tạo abtract thì dùng từ khóa abstract
    - để tạo interface thì dùng interface
    - trong interface sẽ gồm có thuộc tính và phương thức
    - đối với phương thức thì không có phần thân tức là nó chỉ định nghĩa thôi
    - đối với interface thì không thể dùng kiểu kết hợp (union và intersection)
    được như đối với type
    - Có thể khởi tạo đối tượng từ interface được không? 
    ==> không thể khởi tạo đối tượng từ interface được 
    -interface sinh ra nhằm mục đích gì?
    -interface là 1 cái khuân mẫu cho các class khác kế thừa phải tuân theo
    -các class con khi kế thừa interface bắt buộc phải triển khai tất cả các 
    thuộc tính và phương thức của interface (implement)
    - 1 class có thể triển khai nhiều interface được không?
    ==> 1 class có thể triển khai nhiều interface được?
    - interface  có kế thừa interface được không?
    ==> interface có thể kế thừa interface
    - trong interface thì không thể đặt access modifier được 

 */
interface Sales{
   name:string;
    sale():string;
    sale1():void;
}

interface Sales1{
    name:string,
    address:string,
}
interface Sales3 extends Sales1{
    age:number;
}
 class Person implements Sales,Sales1 {
     name: string;
     address: string;
     constructor(name: string,address:string) {
        // không cần để super
         this.name = name;
         this.address=address;
     }
     // bắt buộc phải triển khai phương thức sale trong interface
     sale(): string {
         return "giảm giá 5%";
     }
     sale1(): string {
         return "giảm giá 15%";
     }
 }

 type A={
    name:string,

 }
 type B ={
    name:string;
    age:number
 }
 type C=A|B// union & kiểu intersection
 // khi dùng type có thể dùng các kiểu kết hợp được không?
 let name1: A;
 