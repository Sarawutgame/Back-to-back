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

function registerUser(username, email, password) {
    const params = {
        TableName: 'Register',
        Item: {
            'username': { S: username },
            'email': { S: email },
            'password': { S: password },
        }
    };
}
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

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        registerUser(username, email, password);
    }

    function handleSubmit(event) {
        event.preventDefault();
        registerUser(username, email, password);
      }

    return (

        <div className="container">
            <form className="Register-form">
                <h1>สมัครสมาชิก</h1>
                <div>
                    <p>ชื่อ</p>
                    <input type='text' value={username} onChange={handleUsernameChange}></input>
                    <p>รหัสผ่าน</p>
                    <input type='password' value={password} onChange={handlePasswordChange}></input>
                    <p>ยืนยันรหัสผ่าน</p>
                    <input ></input>
                    <p>อีเมล</p>
                    <input type='email' value={email} onChange={handleEmailChange}></input>
                    <p>เบอร์โทรศัพท์</p>
                    <input></input>

                </div>
                <button type='submit' onSubmit={handleSubmit}>สมัครสมาชิก</button>





            </form>
            {/* <button>ยังไม่มีบัญชีสมัครได้เลย</button> */}
        </div>
    )

}

export default RegisterForm