
import Product from './Product'
interface Props{
    products:Product[];
    a:number
}
interface Product{
    name:string,
    price:number,
    id:number,
}
const obj={
    name:"lan anh",
    age:18,
    address:"hn"
}
// destructoring
const props={
    propducts:[],
    a:5
}
export default function Products(props:Props) {
    // dùng destructoring
    // console.log(11111,props);
    const{products}=props;
  return (
    <div>Products
       <ul>
              {products.map((item,index, arr) => {
                  return <Product product={item}></Product>
              })}
       </ul>
        
    </div>
  )
}
