import { useContext } from "react"
import {Context} from "./UseContext"

export default function E() {
    let result = useContext(Context);
    console.log(result);
    
  return (
    <div>E : {result}</div>
  )
}
