// khởi tạo state
import { Job } from "../../interface";
const initialJob: Job[] = [
    {
        id: 1,
        name: "học redux",
        status: false,
    },
    {
        id: 2,
        name: "code redux",
        status: false,
    },
    {
        id: 3,
        name: "thực hành redux",
        status: false,
    },
];

// khởi tạo hàm reducer
const jobReducer=(state=initialJob,action:any)=>{
    switch (action.type) {
        case "ADD":
            // thêm vào
            return [...state];
        case "DELETE":
            //  lấy id phần tử cần xóa
            return [...state];
        case "UPDATE":
            // lấy id của phần tử cần update
            return [...state];

        default:
            return state;
    }
}
export default jobReducer;
