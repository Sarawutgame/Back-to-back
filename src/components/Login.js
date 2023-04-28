
import './Login.css';





function Login() {
    return (
        <div className="container">
            <form className="Login-form">
                <div>
                <p>อีเมล</p>
                <input type="email" id="email" name="email"></input>
                <p>รหัสผ่าน</p>
                <input type="password" placeholder="" id="password" name="password"></input>
                
                </div>
                <button>เข้าสู่ระบบ</button>
                <div>
                    <h4>ยังไม่มีบัญชีสมัครได้เลย</h4>
                </div>
                
                

                
            </form>
            {/* <button>ยังไม่มีบัญชีสมัครได้เลย</button> */}
        </div>
    )

}

export default Login