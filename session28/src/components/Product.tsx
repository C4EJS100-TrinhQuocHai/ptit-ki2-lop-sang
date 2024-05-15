import React from 'react'
interface Props{
    product:Product
}
interface Product{
    name:string;
    id:number,
    price:number,
}
export default function Product(props:Props) {
    console.log(222222,props);
    // destructoring
    const {product} =props;
    
  return (
    <div>
        tên sản phẩm : {product.name} -
        giá sản phẩm : {product.price}
    </div>
  )
}
