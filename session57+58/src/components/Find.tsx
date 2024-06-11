import axios from "axios"
import { useEffect } from "react"


export default function Find() {
    /* 
        Các chức năng tìm kiếm user, tìm kiếm sản phẩm
        tìm kiếm những user có chữ cái 
    */
    /* 
        useEffect(() => {
            let value: string = "c";
            axios.get(`http://localhost:8080/users?name_like=${value}`)
                .then(response => {
                    console.log("giá trị trả về tìm kiếm", response);
    
                })
                .catch(err => console.log(err))
        }, []) */
    /* 
        tìm kiếm theo chữ cái bắt đầu
     */
    useEffect(() => {
        let valueQuery: string = "h";
        axios.get(`http://localhost:8080/users?name_like=^${valueQuery}`)
            .then(response => {
                console.log("giá trị trả về tìm kiếm bắt đầu chữ cái", response.data);

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>Find</div>
    )
}
