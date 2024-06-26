import { useDispatch, useSelector } from "react-redux"
import { increase } from "../store/reducers/countReducer";
export default function Count() {
    //lấy dữ liệu từ kho
    //useSelector

    // thực hiện hành động : useDispatch
    const data :any= useSelector(state=>state);
    console.log("data",data);
    const disPatch= useDispatch();
    const increaseCount=()=>{
        disPatch(increase());
    }
  return (
    <div>Count
        <p>giá trị biến count: {data.countReducer.count}</p>
        <button onClick={increaseCount}>tăng</button>
        <button >giảm</button>
    </div>

  )
}
