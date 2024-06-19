import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./post.css"
import Loading from "../loading/Loading"
interface Post{
    id:number,
    title:string,
    image:string,
    date:string,
    status:boolean
}
export default function Post() {
    const [ posts, setPosts]= useState<Post[]>([]);
    const [isLoad,setIsLoad]=useState<boolean>(true);
    useEffect(()=>{
        getPosts();
    },[])
    // tạo function lấy dữ liệu các bài viết về
    const getPosts=()=>{
        axios.get("http://localhost:8080/posts")
        .then(response=>{
            setTimeout(() => {
                setIsLoad(false);
                setPosts(response.data);
            }, 3000);
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>Post
            <input type="text" placeholder='nội dung tìm kiếm' />
            <select name="" id="">
                <option value="">lọc bài viết</option>
            </select>
            <button>thêm bài viết</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình Anh</th>
                        <th>Ngày viết</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoad?<Loading></Loading>:""}
                    {
                        posts.map((post, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{post.title}</td>
                                    <td>
                                        <img src={post.image} alt="" />
                                    </td>
                                    <td>{post.date}</td>
                                    <td>{post.status ?
                                        <button>đã xuấn bản</button> : <button>ngừng xuất bản</button>}
                                    </td>
                                    <td>
                                        <button>chặn</button>
                                        <button>sửa</button>
                                        <button>xóa</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
