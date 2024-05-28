
import "./login.scss";
export default function Login() {
  return (
    /* muốn dùng scss thì phải cài npm i sass  */
    <div className='login'>
        <div className='login-name'>
            <label htmlFor="">username</label>
            <input className="login-name__input" type="text" /> 
        </div>
       <div className='login-pass'>
            <label htmlFor="">password</label>
            <input type="text" /> 
       </div>
        <button>login</button>
    </div>
  )
}
