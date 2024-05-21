import React, { useState } from 'react'

export default function Form() {
     const [name,setName]=useState<string>("");
     const [email,setEmail]=useState<string>("");
    const handleClick=()=>{
        console.log("đã gọi vào hàm!");
    }
    const changeName =(e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("đã ăn vào hàm handleChange");
        console.log("giá trị người dùng nhập vào",e.target.value);
        // cập nhật state
        setName(e.target.value);
    }
    const changeEmail=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value);
    }
  return (
    <div>
        {/* 
         Các kĩ thuật xử lý trong form
         Có 2 kĩ thuật xử lý chính
         1.controller
            + lấy dữ liệu người dùng nhập vào ô input
            + lấy dữ liệu khi người dùng nhập vào ô textarea
            + chọn select-option
            - ở trong function component muốn quản lý dữ liệu(trạng thái)
            dùng useState.
         2.uncontroller
         */}

         <div>
            <label htmlFor="">tên</label>
            <input 
                onChange={changeName}
                type="text"
             />
             <p>tên người dùng nhập : {name}</p>
             <label htmlFor="">email</label>
             <input
              onChange={changeEmail}
              type="text" />
             <p> email người dùng nhập :{email} </p>
             <button onClick={handleClick}>login</button>
         </div>
    </div>
  )
}
