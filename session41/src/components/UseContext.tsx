
import { createContext, useState } from 'react'
import A from './A'
export const Context=createContext("");
export default function UseContext() {
    const [name,setName]=useState<string>("Trang");
    // dùng props để gửi dữ liệu name(Trang)
    // component E nhận giá trị Trang
  return (
    <div>UseContext
        {/* 
            sinh ra giúp cho việc truyền dữ liệu giữa các component có quan hệ cha
            con được nhanh hơn, dễ dàng hơn không phải truyền theo kiểu props
            bình thường.
            -Các component phải có quan hệ cha con
            -tạo 1 biến gán = createContext("")
            export biến ra
            -dùng biến này bọc compoent
            <Biến.Provider value={}> 
            -component con muốn nhận data
             import biến đó vào
             useContext(Biến bên trên export)
        */}
       <Context.Provider value={name}>
              <A></A>
       </Context.Provider>
    </div>
  )
}
