import { useState } from "react"

export default function Baitap3() {
    const [date,setDate]=useState<string>("");

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("giá trị chọn",e.target.value);
        setDate(e.target.value);
    }
  return (
    <div>
        Baitap3
        <label htmlFor="">chọn date </label>
        <input 
            type="date" 
            onChange={handleChange}
        />
        <p>thời gian vừa chọn {date}</p>
      <p>  *************</p>
    </div>
  )
}
