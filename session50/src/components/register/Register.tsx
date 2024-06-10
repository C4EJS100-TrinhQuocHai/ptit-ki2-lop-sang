import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();
    const register = (event: React.FormEvent) => {
        // kiểm tra mọi thông tin người dùng nhập ok hết thì 
        // chuyển sang trang login
        // ngăn chặn việc submit của form-không reload lại
        event.preventDefault();
        // dùng hook navigate
        navigate("/login")
    }
    return (
        <>
            <div style={{ height: "5000px" }}></div>
            <div >Register
                <form onSubmit={register}>
                    <label htmlFor="">email</label>
                    <input type="text" /> <br />
                    <label htmlFor="">name</label>
                    <input type="text" /> <br />
                    <label htmlFor="">password</label>
                    <input type="text" /> <br />
                    <label htmlFor=""> confirmpassword</label>
                    <input type="text" /> <br />
                    <button >register</button>
                </form>
            </div>
        </>
    )
}
