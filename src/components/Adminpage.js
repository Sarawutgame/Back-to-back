import React, { useState } from 'react';

import './Adminpage.css'; // Import the CSS file
import { useEffect } from 'react';
import Topbar from './Topbar/Topbar';



// function AdminModalButton(){
//     const [showModalAdmin, setShowModalAdmin] = useState(false);

//     const toggleModal = () => {
//         setShowModalAdmin(!showModalAdmin);
//     }
// }

function AdminPage() {
    const [allTag, setAllTag] = useState([]);
    const [infoReport, setInfoReport] = useState([]);
    const [pullReport, setPullReport] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3005/getReport", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((value) => {
            setInfoReport(value)
            // allitem=value;
            console.log(infoReport);
            setPullReport(true)
        })

        fetch("http://localhost:3005/getTag", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((value) => {
            setAllTag(value);
        })
    
    }, [pullReport]);
  
  

    async function summitBan(item){

        let reportJSON = {
            idreport:item._id,
            namereport:item.namereport ,
            typereport: item.typereport,
            iditem: item.iditem,
          }
      
        await fetch("http://localhost:3005/Banitem", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportJSON),
        })
        .then((res) => res.json()).then(() => {
            alert('ทำการเเบนเรียบร้อยเเล้ว')
        })


    }

    const [showModalAdmin, setShowModalAdmin] = useState(false);
    const toggleModal = () => {
        setShowModalAdmin(!showModalAdmin);
    };
    return (
        <>
        <Topbar />
        <div className="container-ad">
            <div className='add-tag'>
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <p className='header-text'>Add tag</p>
                    <button className='add-btn'><h5 style={{margin: '0px', color: 'white', fontSize: '14px'}}>Add</h5></button>
                </div>
                <table className='table'>
                    <tr className='row'>
                        <th style={{fontSize:'20px'}}>ชื่อ</th>
                        <th style={{fontSize:'20px'}}>ราคา</th>
                        <th style={{fontSize:'20px'}}>แก้ไข</th>
                    </tr>
                    {allTag.map((value, index) => {
                        return(
                            <tr>
                                <td>{value.tagname}</td>
                                <td>{value.tagprice}</td>
                                <td style={{display:'flex', justifyContent:'center'}}>
                                    <button className='edit-btn'><h5 style={{margin: '0px', color: 'white', fontSize: '14px'}}>Edit</h5></button>
                                    <button className='delete-btn'><h5 style={{margin: '0px', color: 'white', fontSize: '14px'}}>Delete</h5></button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <br/>
            <br/>
            <div className="report-header">
                <p className="header-text">Report DashBoard</p>
                <button className='sub-button'>ทั้งหมด</button>
                <table className="table">
                    <tr className="row">
                        <th style={{fontSize:'20px'}}>ชื่อของสิ่งที่รายงาน</th>
                        <th style={{fontSize:'20px'}}>รายละเอียด</th>
                        <th style={{fontSize:'20px'}}>ประเภท</th>
                        <th style={{fontSize:'20px'}}>การดำเนินการ</th>
                    </tr>
                    {/* <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td >
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
                    </tr> */}
                    {
                        infoReport.map((report_item, index) =>{
                            return(
                                <tr className="row">
                                    <td>{report_item.namereport}</td>
                                    <td>{report_item.desc}</td>
                                    <td ><p style={{margin:'0px', display:'flex', justifyContent:'center'}}>{report_item.typereport}</p></td>
                                    <td style={{display:'flex', justifyContent:'center'}}>
                                        {
                                            report_item.statusReport === 'done' &&
                                            <p style={{margin:'0px', display:'flex', justifyContent:'center'}}>เเบนเรียบร้อยเเล้ว</p>
                                        }
                                        {
                                            report_item.statusReport !== 'done' &&
                                            <button  className='Ban-ad' onClick={() => summitBan(report_item)}><h5 style={{margin:'0px', color:'white', fontSize:'14px'}}>Ban</h5></button>
                                        }
                                        
                                        {/* {showModalAdmin && (
                                            <div className='modalAdminBG'>
                                                <div className='modalAdmin-container'>
                                                    <div className='modalAdminTitle'>
                                                        <h5 style={{ marginBottom: '0px' }}>ต้องการแบนผู้ใช้รายนี้หรือไม่</h5>
                                                    </div>
                                                    <button className='admin-close-button' onClick={toggleModal}>ยกเลิก</button>
                                                    <button className='admin-confrim-button'>ยืนยัน</button>
                                                </div>
                                            </div>
                                        )} */}
                                    </td>
                                </tr>
                            ) 
                        })
                    }

                    {/* <tr className="row">
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
                    </tr> */}

                </table>
            </div>
            
        </div>
        </>
    );
}

export default AdminPage;
