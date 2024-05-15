import React from 'react'
import Parent from './components/Parent'
import Products from './components/Products';

export default function App() {
  let fullName:string="hoa";
  let age:number=20;
  let a:number=5;
  let products=[
    {
      name:"iphone15",
      id:1,
      price:5000,
    },
    {
      name: "iphone14",
      id: 2,
      price: 4000,
    },
    {
      name: "iphone13",
      id: 3,
      price: 3000,
    }
  ]
  return (
    <div>App
      <p>props : properties
      -dùng để truyền, gửi dữ liệu từ  component cha xuống component con 
      -thế  nào component cha? 
      -thế nào là component con? 
      - component cha chứa component con
      </p>
      <p>state
      - 
      </p>
      <Parent a={fullName}></Parent>
      <Products products={products} a={a}></Products>
    </div>
  )
}
