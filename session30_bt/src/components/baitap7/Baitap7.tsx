import { useState } from "react"
export default function Baitap7() {
    const [numbers, setNumbers] = useState<number[]>([]);
    /* 
        các bước làm
        1. Tạo ra mảng rỗng để chứa các phần tử
        2. Tạo 1 button click và bắt sự kiện click
        3. Tạo ra số ngẫu nhiên Math.random();
        4. push cái  số ngẫu nhiên vào mảng
    */
    const handleClick = () => {
        // tạo ra số ngẫu nhiên
        let randomNumber = Math.floor(Math.random()*9);
        numbers.push(randomNumber);
        console.log(111111,numbers);
        setNumbers([...numbers]);
        /* 
                khi muốn load lại component (re-render) thì đi setState
                bắt buộc cái state phải khác state ban đầu
         */
    }
    console.log("component load lại!");
    
    return (
        <div>Baitap7
            <p> hiển thị mảng:{numbers}</p>
            <button onClick={handleClick}>addNumber</button>
        </div>
    )
}
