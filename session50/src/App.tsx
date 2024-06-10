import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Products from "./components/products/Products";
import ProductDetail from "./components/product-detail/ProductDetail";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>}>
          <Route path="home/header" element={<Header></Header>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/productdetail/:menmenId" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  )
}
