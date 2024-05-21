
import { useState } from "react";

export default function UseState() {
    const [count, setCount] = useState<number>(0);
    const increase = () => {
        setCount(pre => pre + 1)
        setCount(5)
        setCount(b => b + 3)
    }
    /* batch update */
    /* 
    hook là những cái hàm thôi, khi dùng hàm để ý cho thầy
    đầu vào của hàm, đầu ra trả về kết quả là gì?
    useState dùng để quản lý trạng thái của dữ liệu
    useState trả về 1 cái mảng có 2 phần tử
        + phần tử đầu tiên là giá trị truyền vào useState
        + phần tử thứ 2 là 1 cái function
    thầy dùng destructoring để hứng lấy giá trị
    khi cập nhật lại trạng thái của dữ liệu (setCount) thì component
    re-render lại 
     */
    // const result=useState(0);//[0,f]
    // const [c,d]=useState("hoa");
    // console.log("giá trị result",result);
    // let arr=[5,6];
    // let [a,b]=arr
    console.log("component re-render");

    return (
        <div>UseState
            <p>giá trị biến count: {count}</p>
            <button onClick={increase}>tăng</button>
            <button onClick={() => setCount(count - 1)}>giảm</button>
        </div>
    )
}
