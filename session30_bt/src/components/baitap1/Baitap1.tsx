import React from 'react'

export default function Baitap1() {
    // khai báo hàm click
    const handleClick=()=>{
        console.log("clicked!");
    }
  return (
    <div>baitap1
        <button onClick={handleClick}>click</button>
       <p> ******************</p>
    </div>
  )
}
