// khởi tạo state
import { JobTodo } from "../../interface";
// let stateJob:JobTodo[]=[
//     {
//         id:1,
//         name:"học redux",
//         status:false,
//         level:"quan trọng"
//     },
//     {
//         id:2,
//         name:"cầu lông",
//         status:false,
//         level:"bình thường"
//     }
// ];
let stateJob: JobTodo[] = JSON.parse(localStorage.getItem("jobs") || "[]");
// tạo hàm tính toán xử lý dựa vào các action

const jobReducer = (state = stateJob, action: any) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("đã vào case thêm công việc", action);
            localStorage.setItem(
                "jobs",
                JSON.stringify([...state, action.payload])
            );
            return [...state, action.payload];
        case "UPDATE_TODO":
            console.log("action",action);
            return [...state];
        case "DELETE":
            return [...state];
        default:
            return state;
    }
};
export default jobReducer;
