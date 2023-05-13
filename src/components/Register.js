import React, { useState } from 'react';
// import AWS from 'aws-sdk';

import './Register.css';


// const dynamodb = new AWS.DynamoDB();

// function registerUser(username, email, password) {
//     const params = {
//       TableName: 'Register',
//       Item: {
//         'username': { S: username },
//         'email': { S: email },
//         'password': { S: password },
//       }
//     };
// }
// dynamodb.putItem(params, function(err, data) {
//     if (err) {
//       console.error('Error registering user:', err);
//     } else {
//       console.log('User registered successfully:', data);
//     }
//   });

// function registerUser(username, email, password) {
//     const params = {
//         TableName: 'Register',
//         Item: {
//             'username': { S: username },
//             'email': { S: email },
//             'password': { S: password },
//         }
//     };
// }
// dynamodb.putItem(params, function (err, data) {
//     if (err) {
//         console.error('Error registering user:', err);
//     } else {
//         console.log('User registered successfully:', data);
//     }
// });





function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [faculty, setFaculty] = useState('')

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleRePasswordChange(event) {
        setRePassword(event.target.value);
    }
    
    function handlePhoneNumber(event) {
        const val = event.target.value
        if (event.target.validity.valid) setPhoneNumber(event.target.value);
        else if (val === '' || val === '-') setPhoneNumber(val);
    }
    
    function handleFacultyChange(event) {
        setFaculty(event.target.value);
    }

    async function handleSubmit() {
        // event.preventDefault();
        // registerUser(username, email, password);
        const userJson = {
            imagePath: "",
            username: username,
            email: email,
            password: password,
            phone: phoneNumber,
            faculty: faculty,
            ig: "",
            fb: "",
            twit: "",
            line: ""
        }
        await fetch("http://52.201.71.227:3005/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userJson),
        })
        .then((res) => res.json()).then(() => alert('สมัครสมาชิกเเล้ว'));
    }
    

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     registerUser(username, email, password);
    //   }

    return (

        <div className="container">
            <form className="Register-form">
                <h1>สมัครสมาชิก</h1>
                <div>
                    <p className='label-text'>ชื่อ</p>
                    <input className='text-input' type='text' value={username} onChange={handleUsernameChange}></input>
                    <p className='label-text'>รหัสผ่าน</p>
                    <input className='text-input' type='password' value={password} onChange={handlePasswordChange}></input>
                    <p className='label-text'>ยืนยันรหัสผ่าน</p>
                    <input className='text-input' type='password' value={repassword} onChange={handleRePasswordChange}></input>
                    <p className='label-text'>อีเมล</p>
                    <input className='text-input' type='email' value={email} onChange={handleEmailChange}></input>
                    <p className='label-text'>เบอร์โทรศัพท์</p>
                    <input className='text-input' type='tel' value={phoneNumber} onChange={handlePhoneNumber} maxLength={10} pattern="^-?[0-9]\d*\.?\d*$" required></input>
                    <p className='label-text'>คณะ</p>
                    <input className='text-input' type='tel' value={faculty} onChange={handleFacultyChange}></input>
                </div>
            </form>
            <div className='submitButton'>
                <button className='button-register' onClick={() => handleSubmit()}>สมัครสมาชิก</button>
            </div>
            {/* <button>ยังไม่มีบัญชีสมัครได้เลย</button> */}
        </div>
    )

}

export default RegisterForm