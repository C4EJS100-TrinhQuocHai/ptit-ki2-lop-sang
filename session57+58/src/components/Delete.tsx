import axios from "axios"
import { useEffect } from "react"
export default function Delete() {
    /* 
        dùng thư viện axios để xóa user trong bảng users
        khi xóa thì dùng phương thức delete
    */
    useEffect(() => {
        // khi xóa phải cần truyền id của user cần xóa 
        axios.delete("http://localhost:8080/users/2")
    }, [])
    return (
        <div>Delete</div>
    )
}
