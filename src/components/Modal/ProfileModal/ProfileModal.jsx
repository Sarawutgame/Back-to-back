import React, { useState } from 'react'
import "./profileModal.css"

function ProfileModal( props) {
    const { user } = props
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [faculty, setFaculty] = useState(user.faculty);
    const [ig, setIg] = useState(user.ig);
    const [fb, setFb] = useState(user.fb);
    const [twit, setTwit] = useState(user.twit);
    const [line, setLine] = useState(user.line);
    const [fileimg, setfileimg] = useState();
    const [file, setFile] = useState();
    const [role, setRole] = useState(user.role);
    const [ban, setBan] = useState(user.ban);

    const [imgPath, setImgPath] = useState();

    const inputUsername = (event) => {
        setUsername(event.target.value);
    }
    const inputEmail = (event) => {
        setEmail(event.target.value);
    }
    const inputPhone = (event) => {
        const val = event.target.value
        if (event.target.validity.valid) setPhone(event.target.value);
        else if (val === '' || val === '-') setPhone(val);
    }
    const inputFaculty = (event) => {
        setFaculty(event.target.value);
    }
    const inputIg = (event) => {
        setIg(event.target.value);
    }
    const inputFb = (event) => {
        setFb(event.target.value);
    }
    const inputTwit = (event) => {
        setTwit(event.target.value);
    }
    const inputLine = (event) => {
        setLine(event.target.value);
    }

    const handleEdit = async () => {
        let imageURLS3 = '';
        const fromData = new FormData();
        fromData.append('avatar', fileimg);
        console.log(file)

        await fetch("http://localhost:3005/upload", {
            method: 'POST',
            body: fromData,
        })
        .then((res) => res.json())
        .then((value) => {
            console.log(value.fileurl);
            setImgPath(value.fileurl);
            imageURLS3=value.fileurl;
        })
        .catch(err => console.log(err));

        const updatedUser = {
            username: username,
            email: email,
            phone: phone,
            faculty: faculty,
            ig: ig,
            fb: fb,
            twit: twit,
            line: line,
            imageuserpath: imageURLS3,
            role: role,
            ban: ban
        }

        await fetch('http://localhost:3005/updateUser/' + user._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then((res) => {
            res.json()
        })
        
        await fetch('http://localhost:3005/userById/' + user._id, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((value) => {
            localStorage.setItem("user", JSON.stringify(value));
            props.closeModal(false)
            props.setBool(false)
        })
    }

    function handleImg(e) {
        console.log(e.target.files);
        setfileimg(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="profileModalBackground">
        <div className="profileModalContainer">
            <div className="profileModalTitle">
                <h1 style={{marginBottom:'10px'}}>แก้ไขโปรไฟล์</h1>
            </div>
            <hr  className='profileLine2'/>
            <div className="profileModalBody">
                <div style={{ marginBottom: '2%' }}>
                    <h3 style={{ margin: '0', marginLeft: '2%' }}>รูปภาพ</h3>
                    <input type="file" onChange={handleImg} placeholder="รูปภาพ" style={{ width: '90%', height: '50px', borderRadius: '20px', padding: '2%' }} className='up-input-css' />
                    <div className='container-up-image'>
                      <img src={file} className='up-image'></img>
                    </div>
                    
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>ชื่อ</p>
                    <input type="text" placeholder="Name" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputUsername} value={username} />
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>อีเมลล์</p>
                    <input type="text" placeholder="Email" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputEmail} value={email}/>
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>เบอร์โทร</p>
                    <input type="text" placeholder="Phone" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputPhone} value={phone} maxLength={10} pattern="^-?[0-9]\d*\.?\d*$"/>
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>คณะ</p>
                    <input type="text" placeholder="Faculty" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputFaculty} value={faculty}/>
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>IG</p>
                    <input type="text" placeholder="IG" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputIg} value={ig}/>
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>FB</p>
                    <input type="text" placeholder="FB" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputFb} value={fb}/>
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>Twit</p>
                    <input type="text" placeholder="Twit" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputTwit} value={twit}/>
                </div>
                <div style={{ marginBottom: '2%' }}>
                    <p style={{ margin: '0', marginLeft: '2%' }}>Line</p>
                    <input type="text" placeholder="Line" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputLine} value={line}/>
                </div>
            </div>
            <div className="profileModalFooter">
                <button id='cancel' style={{marginRight:'10px'}} onClick={() => props.closeModal(false)}>Cancel</button>
                <button id='continue' onClick={handleEdit}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileModal