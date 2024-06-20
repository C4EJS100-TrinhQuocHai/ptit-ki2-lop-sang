
import Count from './components/Count'
import Job from './components/Job'

export default function App() {
  return (
    <div>App
      {/* 
        Redux : là 1 thư viện bên thứ 3 giúp cho react có thể quản lý dữ liệu tập trung
        giúp tạo 1 cái kho chứa dữ liệu tập trung
        các component muốn tương tác với dữ liệu thì tương tác trực tiếp
        không cần phải truyền dữ liệu dữ các component.
        redux là 1 thư viện, reactjs cũng là thư viện
        redux có thể kết hợp với nhiều thư viện khác, có thể kết hợp với js thuần
        chứ không phải redux là của react sinh ra.
        1. cài đặt được kho chứa dữ liệu bằng redux
          -xem các bước cài đặt như thế nào
          -nhớ thứ tự luồng chạy của nó
          B1. cài đặt 2 thư viện 
            + react-redux
            + redux
            sau khi cài xong vào package.json xem có chưa?
          B2. đi thiết lập reducer
           -Bên trong store chứa nhiều reducer
           -reducer là gì?
            + reducer bản chất là những cái hàm, function thôi
            + nhiệm vụ của reducer là tính toán, xử lý trả về state mới.
            + 
          B3. tạo store
           + import createStore from " redux"
           + import hàm reducer vào
        2. tương tác dữ liệu với kho chứa đấy.

          1. lấy ra state dùng thì dùng useSelector
          2. bắn action, hành động thì dùng useDispatch
      */}
      <Count></Count>
      <Job></Job>
    </div>
  )
}
