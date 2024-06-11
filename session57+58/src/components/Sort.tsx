import axios from 'axios'
import React, { useEffect } from 'react'

export default function Sort() {
    /* 
        tiến hành sắp xếp theo những điều kiện
        -tăng dần và giảm dần.
     */
    useEffect(() => {
        // sắp xếp theo tuổi tăng dần trong bảng users
        axios.get(" http://localhost:8080/users?_sort=age&_order=asc")
            .then(res => console.log("sau khi sắp xếp age tăng dần", res.data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div>Sort</div>
    )
}
