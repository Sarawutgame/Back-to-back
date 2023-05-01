import React, { useState } from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';


// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Topbar from '../components/Topbar/Topbar';
import './Adminpage.css'; // Import the CSS file




// function AdminModalButton(){
//     const [showModalAdmin, setShowModalAdmin] = useState(false);

//     const toggleModal = () => {
//         setShowModalAdmin(!showModalAdmin);
//     }
// }

function AdminPage() {


    const [showModalAdmin, setShowModalAdmin] = useState(false);

    const toggleModal = () => {
        setShowModalAdmin(!showModalAdmin);
    };


    return (

        <div className="container-ad">

            <div className="report-header">
                <p className="header-text">Report DashBoard</p>
                <button className='sub-button'>ทั้งหมด</button>
                <table className="table">
                    <tr className="row">
                        <th>Detail</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Priority</th>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td>
                            <button onClick={toggleModal} className='Ban-ad'>Ban</button>
                            {showModalAdmin && (
                                <div className='modalAdminBG'>
                                    <div className='modalAdmin-container'>
                                        <div className='modalAdminTitle'>
                                            <h5 style={{ marginBottom: '0px' }}>ต้องการแบนผู้ใช้รายนี้หรือไม่</h5>
                                        </div>
                                        <button className='admin-close-button' onClick={toggleModal}>ยกเลิก</button>
                                        <button className='admin-confrim-button'>ยืนยัน</button>
                                    </div>
                                </div>
                            )}
                        </td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='Ban-ad'>Ban</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>

                </table>
            </div>
        </div>

    );
}

export default AdminPage;
