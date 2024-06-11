import axios from "axios";
import { useEffect } from "react";
export default function Update() {
    /* 
        khi update dùng 2 phương thức put||patch
        PUT: update tất cả
        PATCH: cập nhật một vài  thuộc tính thôi, các thuộc tính còn lại vẫn giữ nguyên
    */
    useEffect(() => {
        // khi update phải biết được id của user cần update
        axios.put("http://localhost:8080/users/4", { name: "huyền chang" })
    }, [])
    return (
        <div>Update</div>
    )
}
