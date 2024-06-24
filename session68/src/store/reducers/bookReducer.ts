import { Book } from "../../interface/interface";
// khởi tạo state
// const initialBook: Book[] = JSON.parse(localStorage.getItem("book")||"[]");
const initialBook: Book[] = [
    {
        id: 1,
        name: "dạy con làm giàu",
        borrow: "24/06/2024",
        pay: "25/06/2024",
        student: "huyền",
        status: false,
        // nếu là chưa trả sách thì trạng thái là false
        // nếu mà trả sách rồi thì trạng thái là true
    },
    {
        id: 2,
        name: "nhà giả kim",
        borrow: "24/06/2024",
        pay: "27/06/2024",
        student: "quỳnh",
        status: true,
        // nếu là chưa trả sách thì trạng thái là false
        // nếu mà trả sách rồi thì trạng thái là true
    },
    {
        id: 3,
        name: "cha giàu cha nghèo",
        borrow: "20/06/2024",
        pay: "29/06/2024",
        student: "lan anh",
        status: false,
        // nếu là chưa trả sách thì trạng thái là false
        // nếu mà trả sách rồi thì trạng thái là true
    },
];

// tạo hàm bookreducer
// chức năng của hàm reducer là tính toán trả về state mới dựa vào action
// action ( những công việc mà mình muốn- thêm, sửa, xóa...)
// hàm reducer tính toán trả về state MỚI
// tạo sao phải tạo state mới vì cái thằng useSelector nó sẽ giúp component
// re-render khi có state MỚI
// const ADD_BOOK = "ADD_BOOK";
export const bookReducer = (state = initialBook, action: any) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state];
        case "DELETE_BOOK":
            return [...state];
        case "UPDATE_STATUS":
            console.log("đang tiến hành update trạng thái!", action);
            // lấy ra id action.payload
            // tìm vị trí theo id
            let confirmUpdateStatus = window.confirm(
                "bạn có muốn update trạng thái hay không?"
            );
            if (!confirmUpdateStatus) {
                return;
            }
            let index = state.findIndex((item) => item.id == action.payload);
            // console.log("vị trí của phần tử cần update trạng thái", index);
            // đi update lại status
            state[index].status = !state[index].status;
            return [...state];
        case "UPDATE_BOOK":
            return [...state];
        default:
            return state;
    }
};
