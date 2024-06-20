
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any= useSelector(state=>{
        return state;
    })
    const dispatch= useDispatch();
    const increase=()=>{
        dispatch(
            {
                type: "INCREASE"
            }
    )
    }
  return (
    <div>
        <p>giá trị biến count:{countState.countReducer}  </p>
        <button onClick={increase}>tăng</button>
        <button>giảm</button>
    </div>
  )
}
