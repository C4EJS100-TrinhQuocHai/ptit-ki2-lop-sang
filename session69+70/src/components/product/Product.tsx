import { useSelector } from "react-redux"
import { Product } from "../../interface";
export default function Products() {
    // lấy dữ liệu ở trong kho đi render
    const products: any = useSelector(state => state);
    console.log("sản phẩm", products);
    return (
        <div>Product
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>tên sản phẩm</th>
                        <th>mô tả</th>
                        <th>ảnh</th>
                        <th>giá</th>
                        <th>số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.productReducer.map((product: Product, index: number) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <img src={product.image} alt="" />
                                </td>
                                <td>{product.price}</td>
                                <td><button>add to cart</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
