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

    async function handleAddTag(){
        let newTag = {
            tagname: name,
            tagprice: price,
        }
        await fetch("http://localhost:3005/createTag", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTag),
        })
        .then((res) => res.json()).then(() => {
            alert('เพิ่มแท็กเรียบร้อยแล้ว');
            setPullReport(false);
            setShowAddTagModal(false);
            setName("");
            setPrice("");
        })
    }

    async function handleEditTag(){
        let edittedTag = {
            id: edittedId,
            price: edittedPrice
        }

        await fetch("http://localhost:3005/updateTag", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(edittedTag),
        })
        .then((res) => res.json()).then(() => {
            alert('แก้ไขแท็กเรียบร้อยแล้ว');
            setPullReport(false);
            setShowEditTagModal(false);
            setEdittedId("")
            setEdittedPrice("");
        })
    }

    async function handleDeleteTag(id) {
        let selectedTag = {
            id: id
        }
        await fetch("http://localhost:3005/deleteTag", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedTag),
        })
        .then((res) => res.json()).then(() => {
            alert('ลบแท็กเรียบร้อยแล้ว');
            setPullReport(false);
        })
    }

    function handleEditModal(id, price){
        setEdittedId(id)
        setEdittedPrice(price);
        setShowEditTagModal(true)
    }

    const [showAddTagModal, setShowAddTagModal] = useState(false);
    const [showEditTagModal, setShowEditTagModal] = useState(false);

    const [showModalAdmin, setShowModalAdmin] = useState(false);
    const toggleModal = () => {
        setShowModalAdmin(!showModalAdmin);
    };

    const [name, setName] = useState("");
    const inputName = (event) => {
        setName(event.target.value);
    }
    const [price, setPrice] = useState("");
    const inputPrice = (event) => {
        setPrice(event.target.value);
    }
    const [edittedPrice, setEdittedPrice] = useState("");
    const inputEdittedPrice = (event) => {
        setEdittedPrice(event.target.value)
    }
    const [edittedId, setEdittedId] = useState("");
    return (
        <>
        <Topbar />
        <div className="container-ad">
            <div className='add-tag'>
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <p className='header-text'>Add tag</p>
                    <button className='add-btn' onClick={() => setShowAddTagModal(true)}><h5 style={{margin: '0px', color: 'white', fontSize: '14px'}}>Add</h5></button>
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
                                    <button className='edit-btn' onClick={() => handleEditModal(value._id, value.tagprice)}><h5 style={{margin: '0px', color: 'white', fontSize: '14px'}}>Edit</h5></button>
                                    <button className='delete-btn' onClick={() => handleDeleteTag(value._id)}><h5 style={{margin: '0px', color: 'white', fontSize: '14px'}}>Delete</h5></button>
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
                </table>
            </div>
            
            {showAddTagModal && (<div className="tagModalBackground">
                <div className='tagModalContainer'>
                    <div className='tagModalTitle'>
                        <h1 style={{marginBottom: '10px'}}>เพิ่มแท็ก</h1>
                    </div>
                    <hr style={{
                        height: "2px",
                        borderWidth: "0",
                        color: "gray",
                        width: "90%",
                        backgroundColor: "gray",
                        marginLeft: "0",
                        marginTop: "0"
                    }}/>
                    <div className='tagModalBody'>
                        <div className='tagInput'>
                            <p style={{fontSize: '18px'}}>ชื่อ :</p>
                            <input type="text" placeholder="Tag Name" style={{width: '50%', height: '40px', borderRadius: '20px', padding: '2%', top: '10px', position: 'relative', marginLeft: '10px'}} onChange={inputName} value={name}/>
                        </div>
                        <div className='tagInput'>
                            <p style={{fontSize: '18px'}}>ราคา :</p>
                            <input type="text" placeholder="Tag Price" style={{width: '50%', height: '40px', borderRadius: '20px', padding: '2%', top: '10px', position: 'relative'}} onChange={inputPrice} value={price} />
                        </div>
                    </div>
                    <div className='tagModalFooter'>
                        <button style={{backgroundColor: '#b02121', borderRadius: '30px'}} onClick={() => setShowAddTagModal(false)}>ยกเลิก</button>
                        <button style={{backgroundColor: '#05AB9F', borderRadius: '30px'}} onClick={handleAddTag}>เพิ่ม</button>
                    </div>
                </div>
            </div>)}

            {showEditTagModal && (<div className="tagModalBackground">
                <div className='tagModalContainer'>
                    <div className='tagModalTitle'>
                        <h1 style={{marginBottom: '10px'}}>แก้ไขแท็ก</h1>
                    </div>
                    <hr style={{
                        height: "2px",
                        borderWidth: "0",
                        color: "gray",
                        width: "90%",
                        backgroundColor: "gray",
                        marginLeft: "0",
                        marginTop: "0"
                    }}/>
                    <div className='tagModalBody'>
                        <div className='tagInput'>
                            <p style={{fontSize: '18px'}}>ราคา :</p>
                            <input type="text" placeholder="Tag Price" style={{width: '50%', height: '40px', borderRadius: '20px', padding: '2%', top: '10px', position: 'relative'}} onChange={inputEdittedPrice} value={edittedPrice} />
                        </div>
                    </div>
                    <div className='tagModalFooter'>
                        <button style={{backgroundColor: '#b02121', borderRadius: '30px'}} onClick={() => setShowEditTagModal(false)}>ยกเลิก</button>
                        <button style={{backgroundColor: '#05AB9F', borderRadius: '30px'}} onClick={handleEditTag}>แก้ไข</button>
                    </div>
                </div>
            </div>)}

        </div>
        </>
    );
}

export default AdminPage;
