import { useCallback, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseContext from "./components/UseContext";


export default function App() {
  const [active,setActive]= useState<boolean>(false);
  const [count,setCount]=useState<number>(0);
  const handleClick=()=>{
   
    setCount(count+1);
  }
 let result= useCallback(()=>{
     const getIdProduct = () => {
    }
    return getIdProduct;
  },[])
  console.log("component App re-render khi click!");
  /* 
    Khi component App được re-render thì các component con
    cũng re-render theo.
   */
  /* 
    nếu active là true thì hiển thị thẻ p với nội dung là xin chào!
    nếu active là false thì không hiển thị gì cả!
   */
  return (
    <div>
      App
      {active ? <p>xin chào</p>:""}
      <UseRef></UseRef>
      <Header count={active}></Header>
      <Main getIdProduct={result}></Main>
      <button onClick={handleClick}> click active </button>
      <p>*****************************</p>
      <UseReducer></UseReducer>
      <p>***********</p>
      <UseContext></UseContext>

    </div>
  )
}
