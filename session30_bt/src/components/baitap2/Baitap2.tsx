// import React from 'react'

import { useState } from "react"

export default function Baitap2() {
    // dùng useState 
    const [value,setValue]=useState<string>("");
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
            // console.log("giá trị người dùng nhập",event.target.value);
        setValue(event.target.value)
    }
  return (
    <div>
        Baitap2
        <br />
        {/* tạo ô input để lấy dữ liệu người dùng nhập và hiển thị ra trình duyệt */}
        <label htmlFor="">nhập dữ liệu</label>
        <input 
            onChange={handleChange}
            type="text" />
        <br />
        <p>dữ liệu hiển thị khi nhập:{value} </p>
     <p>   *******************</p>
    </div>
  )
}
