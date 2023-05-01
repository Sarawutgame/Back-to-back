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

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <div className="modalTitle">
                    <h1 style={{marginBottom:'10px'}}>แก้ไขโปรไฟล์</h1>
                </div>
            </div>
            <hr  className='line2'/>
            <div className="modalBody">
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
            <div className="modalFooter">
                <button id='cancel' onClick={() => props.closeModal(false)}>Cancel</button>
                <button id='continue'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileModal