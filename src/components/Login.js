
import './Login.css';





function Login() {
    return (
        <div className="container">
            <form className="Login-form">
                <div>
                <p className='label-text'>อีเมล</p>
                <input className='text-input' type="email" id="email" name="email"></input>
                <p className='label-text'>รหัสผ่าน</p>
                <input className='text-input' type="password" placeholder="" id="password" name="password"></input>
                
                </div>
                <button className="button-login">เข้าสู่ระบบ</button>
                
                

                
            </form>
            <div>
                <h4>ยังไม่มีบัญชีสมัครได้เลย</h4>
            </div>
            {/* <button>ยังไม่มีบัญชีสมัครได้เลย</button> */}
        </div>
    )

}

export default Login