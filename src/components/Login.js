
import './Login.css';





function Login() {
    return (
        <div className="container-login">
            
            <div className="Login-form">
                <div>
                    <img src='https://postimagebucket.s3.amazonaws.com/146423392-business-to-business-icon-design-concept-removebg-preview.png'></img>
                </div>
                <div>
                    <p className='label-text'>อีเมล</p>
                    <input className='text-input' type="email" id="email" name="email"></input>
                    <p className='label-text'>รหัสผ่าน</p>
                    <input className='text-input' type="password" placeholder="" id="password" name="password"></input>
                </div>
                    <button className="button-login" onClick={() => alert('FS')}>เข้าสู่ระบบ</button>
                <div>
                    <button style={{backgroundColor:'rgba(0, 0, 255, 0)', border:'0px'}} onClick={() => alert('GG')}>
                        <h4 style={{fontSize:'20px', textDecoration:'underline'}}>ยังไม่มีบัญชีสมัครได้เลย</h4>
                    </button>
                </div>
            </div>
            {/* <button>ยังไม่มีบัญชีสมัครได้เลย</button> */}
        </div>
    )

}

export default Login