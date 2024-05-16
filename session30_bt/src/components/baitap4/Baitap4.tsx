import React, { useState } from 'react'
export default function Baitap4() {
    const [city,setCity]=useState<string>("");
    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value);
        setCity(e.target.value);
    }
    return (
        <div>
            Baitap4
            <select name="" id="" onChange={handleChange}>
                <option value="">Chọn tỉnh thành phố</option>
                <option value="HCM">HCM</option>
                <option value="HN">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="ĐN">Đà Nẵng</option>
            </select>
            <p>*******************</p>
        </div>
    )
}
