import { useDispatch, useSelector } from "react-redux"
import { JobTodo } from "../interface";
import { useState } from "react";


export default function Job() {
    // lấy dữ liệu ở trong đi render 
    // dùng useSelector để lấy dữ liệu trong kho
    const[name,setName]=useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [valueInput,setValueInput]=useState<string>("");
    const jobs: any = useSelector(state => {
        return state;
    })
    const disPatch=useDispatch();
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        let valueName= event.target.value;
        setName(valueName);
    }
    const handleSelect=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        let valueLevel= event.target.value;
        setLevel(valueLevel)
    }
    const addTodo=()=>{
        let newJob={
            id: Math.floor(Math.random()*9999999),
            name: name,
            status: false,
            level: level ,
        }
        disPatch({
            type: "ADD_TODO",
            payload:newJob
        })
    }
    const updateJob=(id:number)=>{
        console.log("id",id);
        disPatch({
            type:"UPDATE_TODO",
            payload:id,
        })
    }
    return (
        <div>Job
            <div>
                <label htmlFor="">Tên công việc</label>
                <input
                    value={valueInput}
                    type="text" 
                    onChange={handleChange}
                 />
                <select name="" id="" onChange={handleSelect}>
                    <option value="">chọn cấp độ</option>
                    <option value="very important">Cực kì quan trọng</option>
                    <option value="important"> quan trọng</option>
                    <option value="normal">bình thường</option>
                </select>
                <button onClick={addTodo}>thêm công việc</button>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Tên công việc</th>
                        <th>Trạng thái</th>
                        <th>Mức độ</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.jobReducer.map((job: JobTodo, index: number) => {
                            return (
                                <tr key={job.id}>
                                    <td>{index + 1}</td>
                                    <td>{job.name}</td>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>{job.level}</td>
                                    <td>
                                        <button>xóa</button>
                                        <button onClick={()=>updateJob(job.id)}>sửa</button>
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
