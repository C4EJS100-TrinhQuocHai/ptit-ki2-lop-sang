import React from 'react'

export default function SelectOption() {
    const handleChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        console.log("giá trị người dùng chọn",event.target.value);
        
    }
  return (
    <div>
        SelectOption
        <select onChange={handleChange} name="" id="">
            <option value="">Chọn tỉnh/thành phố</option>
            <option value="HN">Hà Nội</option>
            <option value="HCM">HCM</option>
            <option value="Quảng Ninh">Quảng Ninh</option>
        </select>
    </div>
  )
}
