import React, { useState } from 'react'

export default function Function() {
   const [name,setName1]=useState<string>("hoa");
  /* 
  
    Event : sự kiện 
    onclick
    onchange
    oninput
    onkeydown
    onkeyup
    .....


  */
  // nơi khai báo các hàm
  // dùng các từ khóa khai báo: let const var
  const handleChange=()=>{
    console.log("đã gọi vào hàm handleChange");
    // đi xử lý 
    // khi muốn cập nhập state(name)
    setName1("hồng");
    // khi setName thì component re-render lại 1 lần
    
  }
  console.log("component render lại!");
  return (
    <div>Function
      <p>{name}</p>
      <button onClick={handleChange}>click</button>
    </div>
  )
}
