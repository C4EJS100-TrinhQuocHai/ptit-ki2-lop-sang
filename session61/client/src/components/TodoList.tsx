
import axios from 'axios';
import { useEffect, useState } from 'react';
interface Job{
    id:number,
    name:string,
    status:boolean,
}
export default function TodoList() {
    const [jobs,setJobs]=useState<Job[]>([]);
    /* 
        lấy data ở trong file db.json
        nằm trong folder server
        - dùng  thư viện axios 
        npm i axios

     */
    // function getData
    function getData() {
        axios.get("http://localhost:8080/jobs")
        .then(response=>{
            console.log("data trả về",response);
            setJobs([...response.data]);
        })
        .catch(err=>console.log("lỗi",err))
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>TodoList
            <h1>Quản lý công việc</h1>
            <input type="text" name="" id="" /> <br />
            <button>Thêm công việc</button> <br />
            <button>Tất cả </button>
            <button>Hoàn thành </button>
            <button>Đang thực hiện </button>
            <ul>
               {jobs.map((job:Job)=>{
                return (
                    <li key={job.id}>
                        <input type="checkbox" />
                        {job.name}
                        <button>sửa</button>
                        <button>xóa</button>
                    </li>
                )
               })}
            </ul>
            <button>xóa công việc hoàn thành</button>
            <button>xóa tất cả công việc</button>
        </div>
    )
}
