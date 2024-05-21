import { useState } from "react"
interface User {
    email: string,
    username: string,
    password: string,
}
export default function FormAdvanced() {
    // cách bình thường
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    // cách xử lý tối ưu hơn
    const [user, setUser] = useState<User>({
        email: "",
        username: "",
        password: "",
       
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value= event.target.value;
        let name=event.target.name;
        // console.log("giá trị value:",value);
        // console.log("giá trị của name:",name);
        setUser({...user,[name]:value})
    }
    console.log("giá trị user",user);
    
    return (
        <div>
            FormAdvanced
            <div>
                <label htmlFor="">email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                /><br />
                <label htmlFor="">username</label>
                <input
                    name="username"
                    onChange={handleChange}
                    type="text" /> <br />
                <label htmlFor="">password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    type="text" /><br />
                <label htmlFor="">confirmpassword</label>
                <input
                    name="confirmpassword"
                    onChange={handleChange}
                    type="text" /><br />
                <button>register</button>
            </div>

        </div>
    )
}
