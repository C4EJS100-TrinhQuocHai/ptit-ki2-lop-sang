import React from 'react'
import Child from './Child'
interface Props{
  a:string
}
export default function Parent(x:Props) {
  console.log(1111,x.a);
  
  return (
    <div>Parent
      <Child></Child>
    </div>
  )
}
