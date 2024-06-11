import axios from "axios";
import { useEffect, useState } from "react";
interface User {
    id: number,
    name: string,
    email: string,
}
export default function Read() {
    const [users, setUser] = useState<User[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then(response => {
                console.log("giá trị trả về", response.data);
                setUser(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>Read
            {/* 
            dùng thư viện axios để lấy tất thông tin trong bảng users
            + khi lấy dữ liệu về thì dùng phương thức get(theo chuẩn restfull API)
            + 
         */}
            <p> danh sách user ở trong bảng users </p>
            <ul>
                {users.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}
