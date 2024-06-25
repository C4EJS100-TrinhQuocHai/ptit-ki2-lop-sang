import { useSelector } from "react-redux"
import { ProductCart } from "../../interface";

export default function Cart() {
    // đi hiển thị
    const cart: any = useSelector(state => state);
    return (
        <div>Cart
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>tên sản phẩm</th>
                        <th>mô tả</th>
                        <th>ảnh</th>
                        <th>giá</th>
                        <th>số lượng</th>
                        <th>hành động </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cartReducer.map((product: ProductCart, index: number) => {
                        return (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <img src={product.image} alt="" />
                                </td>
                                <td>{product.price}</td>
                                <td>
                                    <button>+</button>
                                    {product.quantity}
                                    <button>-</button>
                                </td>
                                <td><button>xóa</button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p>tổng tiền phải trả: </p>
        </div>
    )
}
