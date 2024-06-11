import { useEffect } from "react";
import axios from "axios";

export default function Create() {
    /* 
            Tiến hành thêm dữ liệu vào bảng users
            khi thêm dữ liệu thì dùng phương thức POST

     */
    useEffect(() => {
        let newUser = {
            name: "trang",
            email: "trang@gmail.com"
        }
        axios.post("http://localhost:8080/users", newUser)
    }, [])
    return (
        <div>Create</div>
    )
}
