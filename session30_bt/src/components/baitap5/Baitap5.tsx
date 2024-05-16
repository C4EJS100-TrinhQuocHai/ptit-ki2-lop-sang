import React, { useState } from 'react'

export default function Baitap5() {
    // tạo 1 state
    const [show,setShow]=useState<boolean>(true);

    
  return (
    <div>Baitap5
        {
            show ? <button>Hiện</button>:<button>ẩn</button>
        }
        <button onClick={()=>setShow(!show)}>click</button>
    </div>
  )
}
