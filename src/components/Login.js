
import { useState } from 'react';
import './Login.css';





function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(false);

    const inputId = (event) => {
        setId(event.target.value);
    };

    const inputPassword = (event) => {
        setPassword(event.target.value);
    }

    const handleOnLogin = async (e) => {
        const user = {
          email: id,
          password: password,
        };
    
        if (id.length === 0 || password.length === 0) {
          alert("Please fill all input");
        } else {
          e.preventDefault();
          let result = await fetch("http://localhost:3005/login", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          });
          result = await result.json();
          console.warn(result);
          if (result) {
            console.log("Login succesfully");
            setId("");
            setPassword("");
            localStorage.setItem("user", JSON.stringify(result));
            console.log(result.Role);
            // if (result.Role === "role") {
            //   window.location.href = "/admin";
            // } else {
              window.location.href = "/";
            // }
          } else {
            console.log("Login unsuccessfull");
          }
        }
      };

    return (
        <div className="container">
            <form className="Login-form">
                <div>
                <p className='label-text'>อีเมล</p>
                <input className='text-input' type="email" id="email" name="email" value={id} onChange={inputId}></input>
                <p className='label-text'>รหัสผ่าน</p>
                <input className='text-input' type="password" placeholder="" id="password" name="password" value={password} onChange={inputPassword}></input>
                
                </div>
                <button className="button-login" onClick={handleOnLogin}>เข้าสู่ระบบ</button>
                
                

                
            </form>
            <div>
                <h4>ยังไม่มีบัญชีสมัครได้เลย</h4>
            </div>
            {/* <button>ยังไม่มีบัญชีสมัครได้เลย</button> */}
        </div>
    )

}

export default Login