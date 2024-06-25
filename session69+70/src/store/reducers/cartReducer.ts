// khởi tạo state
const cart = JSON.parse(localStorage.getItem("cart") || "[]");

// khởi tạo hàm cart reducer

const cartReducer = (state = cart, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("TIẾN HÀNH ĐI MUA HÀNG!", action);
            /* 
                các bước làm khi đi mua hàng
                kiểm tra xem trong giỏ hàng của mình đã có sản phẩm đấy chưa
                + nếu có thì tăng số lượng
                + nếu chưa có thì thêm vào
            */
            // duyệt
            let result = state.findIndex((item: any) => {
                return item.id == action.payload.id;
            });
            // hàm findIndex dùng để xem phần tử có tồn tại trong mảng hay không
            // nếu có trả về vị trí còn nếu không có trả về -1
            console.log(1111, result);
            if (result === -1) {
                // tức là trong giỏ hàng chưa có sản phẩm
                let product = { ...action.payload, quantity: 1 };
                state.push(product);
                // tiến hành lưu trên local
                localStorage.setItem("cart", JSON.stringify(state));
            } else {
                state[result].quantity = state[result].quantity + 1;
                localStorage.setItem("cart", JSON.stringify(state));
            }
            return [...state];
            case "UPDATE_QUANTITY":
                
                return [...state]
        default:
            return state;
    }
};
export default cartReducer;
