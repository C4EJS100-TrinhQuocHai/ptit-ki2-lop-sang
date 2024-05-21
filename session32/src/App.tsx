
import ClassComponent from './components/ClassComponent'
import Form from './components/Form'
import FormAdvanced from './components/FormAdvanced'
import Textarea from './components/Textarea'
import SelectOption from './components/SelectOption'

export default function App() {
  // setTimeout(()=>{
  //   console.log("hàm settimeout được gọi!");
    
  // },5000)
  // let interval=setInterval(()=>{
  //   console.log("hàm setinterval được gọi!");
    
  // },1000)
  // khi viết hàm setInterval và setTimeout nên viết trong component didMount
  // const handleClick=()=>{
  //   clearInterval(interval)
  // }
  
  /* 
    setInterval chạy nhiều lần khi muốn dừng setInterval thì phải clearInterval
   */
  return (
    <div>App
      <ClassComponent></ClassComponent>
      <p>*************</p>
      <Form></Form>
      <p>**************</p>
      <FormAdvanced></FormAdvanced>
      <p>***************</p>
      <Textarea></Textarea>
      <p>***************</p>
      <SelectOption></SelectOption>
    </div>
  )
}
