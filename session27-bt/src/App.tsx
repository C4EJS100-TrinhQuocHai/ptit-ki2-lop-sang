import React from 'react'
import Bai1 from './components/Bai1'
import Bt2 from './components/Bt2'
export default function App() {
  return (
    <div>
      <Bai1></Bai1>
      <Bt2></Bt2>

      {/* 
      repository : chia làm 2
      1. repo local : kho chứa trên máy tính của mình
      2. repo remote: kho chứa trên git

      các bước đẩy lên git
      B1. tạo kho chứa ở trên git
       + new repository
      B2: git init
       + tạo kho chứa ở trên local ( trên máy tính của mình)
      B3. git add b1.tsx b2.tsx
        git add . ( đẩy tất cả thư mục lên)
      B4. git commit -m "bai tap session27"
      B5. git remote add origin 
      B6. git push -u origin master
       */}
    </div>
  )
}

