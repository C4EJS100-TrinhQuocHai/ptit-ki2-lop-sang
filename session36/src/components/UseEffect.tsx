import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount]=useState<number>(0);
    const [name,setName]=useState<string>("minh thu");
    const [cart,setCart]=useState([]);
    const [product,setProduct]=useState({})
    useEffect(()=>{
        console.log("useEffect được gọi");
        // tính toán giá tiền phải trả
        // thường dùng để call API
    },[])
  
    const handleClick=()=>{
        setCount(count+1);
    }
 /// đoạn đi xử lý logic
  return (
    <div>
        UseEffect
      {/* 
        UseEffect : là 1 hook 
        useEffect là 1 cái hàm
        SINH RA ĐỂ LÀM GÌ?
        - giải quyết các vấn đề side effect. (  tác dụng phụ bên cạnh tác vụ chính);
        CÚ PHÁP
        3 cú pháp useEffect
        useEffect  tương tự componentDidMount
        1. nhận vào 1 tham số là callback function (arrow function)
            + khi componnent được mount vào Dom thì useEffect được gọi!
            + khi mỗi lần component re-render thì useEffect được gọi!
        2. nhận vào 1 tham số là callback function (arrow function) và tham số thứ 2 là
           một mảng rỗng []
            + khi component được mount vào DOM thì useEffect được gọi!
            + khi mỗi lần component re-render thì useEffect không được gọi.
        3. nhận vào 1 tham số là callback function (arrow function) và tham số thứ 2 là
           một mảng  [dependency] (sự phụ thuộc)
            + useEffect được gọi khi component được mount vào DOM
            + khi dependency thay đổi thì useEffect được gọi
        cách dùng như thế nào?

      */}
        <p> giá trị biến count :{count}</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
