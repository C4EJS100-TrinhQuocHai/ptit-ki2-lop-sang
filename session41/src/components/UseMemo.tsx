import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([
        {
            product: "iphone5",
            price: 5000,
            quantity: 1,
        },
        {
            product: "iphone6",
            price: 7000,
            quantity: 2,
        },
        {
            product: "iphone14",
            price: 15000,
            quantity: 3,
        },
        {
            product: "iphone15",
            price: 25000,
            quantity: 4,
        }
    ])
  
    let memo = useMemo(() => {
        let payment = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity
        }, 0)
        return payment
    }, [cart])
    const addToCart = () => {
        let newProduct =
        {
            product: "iphone8",
            price: 5000,
            quantity: 2,
        }
        cart.push(newProduct);
        setCart([...cart]);


    }


    return (
        <div>UseMemo
            gia tien:{memo}
            {/* 
            đây là 1 hook giúp ghi việc những tính toán 

         */}
            <button onClick={() => setCount(count + 1)}>click</button>
            <button onClick={addToCart}>mua</button>
        </div>
    )
}
