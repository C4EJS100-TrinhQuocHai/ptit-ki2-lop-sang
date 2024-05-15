import React, { useState } from 'react'

export default function Function() {
    const [fullName,setFullName]=useState<string>("Hoa");
    const [age,setAge]=useState<number>(13);
    const [students,setStudents]=useState<string[]>([]);
    const [isActive,setIsActive]=useState<boolean>(true);
    // const fullName:string="hoa"
    const handleChange=()=>{
        setAge(14);
        setFullName("Hồng");
    }
  return (
    <div>
        Function
        {/* 
        State : dùng để quản lý dữ liệu trong component
        Đối với function để quản lý dữ liệu dùng useState,
        đây là 1 hook sinh ra giúp function có thể quản lý dữ liệu
        state có thể thay đổi giá trị được
         */}
         {/* hiển thị */}
         <p> {fullName} năm nay {age} tuổi!</p>
         <button onClick={handleChange}> change age</button>

    </div>
  )
}
