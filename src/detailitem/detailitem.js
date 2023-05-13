import logo from '../logo.svg'
import './detailitem.css'
import sunflower from '../Sunflower.jpg'
import { useLocation, useNavigate } from "react-router-dom";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faFlag, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Topbar from '../components/Topbar/Topbar';






function DetaiIitem() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const itemid = location.state?._id;
  const userid = location.state?.iduser;
  console.log(userid);
  const [telltype, setTelltype] = useState('สิ่งของ')
  const [pulldetail, setPullDetail] = useState(false);
    // let allitem = []
  const [detailitemlist, setDetailItemList] = useState({
    imagePath:'',
    name:'',
    type:'',
    desc:'',   
    tag:'',
    price:'',
    iduser:'',
    nameuser:'',
    status:'',
    _id:'',
    __v:'',
    bitprice:'',
    iduserwinbit:'',
    ban:'',
    daytime:''



  });

  const [userDetail, setuserDetail]= useState({
    _id:'',
    username:'',
    email:'',
    password:'',
    phone:'',
    faculty:'',
    ig:'',
    fb:'',
    twit:'',
    line:'',
    __v:'',
    imageuserpath:'https://postimagebucket.s3.amazonaws.com/e3fa12a0-77c0-48d0-ad6c-26771ee872bf.jpg',
  })
  const id_props = itemid;
  const userid_props = userid;
  const tag = ['อุปกรณ์การเรียน', 'ดอกไม้'];

  //USER
  const id_local = user._id;
  const name_local = user.username;


  useEffect(() => {
    fetch("http://localhost:3005/getitem/" + id_props, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((value) => {
        setDetailItemList(value);
        // allitem=value;
        // console.log(allitem);
        
        })
    
    fetch("http://localhost:3005/userById/" + userid_props, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((value) => {
        setuserDetail(value);
        // allitem=value;
        // console.log(allitem);
        console.log(userDetail);
        console.log(detailitemlist);
        setPullDetail(true)
        })
    
    //Runs only on the first render
  }, [pulldetail]);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  }

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setOpen2(false);
  }

  const [reportDes, setReportDes] = React.useState('');


  async function summitInterest(){

    let notiJson = {
      iduser: id_local,
      nameitem: detailitemlist.name,
      iditem: detailitemlist._id,
      usernamepost: userDetail.username,
      useridpost: userDetail._id,
      itemtype: detailitemlist.type,
      imageURL:detailitemlist.imagePath,
      bitprice: '0',
    }
    await fetch("http://localhost:3005/createNoti", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(notiJson),
    })
    .then((res) => res.json()).then(() => {
    }).catch((e) => console.log(e));

    let request = {
      iduser: userDetail._id,
      iditem:detailitemlist._id,
      nameitem:detailitemlist.name,
      usernamerequest:name_local,
      useridrequest:id_local,
      itemtype:detailitemlist.type,
      imageURL:detailitemlist.imagePath,
      bitPrice:'0',
    }
    await fetch("http://localhost:3005/createRequest", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(request),
      })
      .then((res) => res.json()).then(() => {
          alert('บอกสนใจสิ่งของเรียบร้อยเเล้ว');
      }).catch((e) => console.log(e));

  }

  function InputReportDes(event){
    setReportDes(event.target.value);
  }

  const [bitPrice, setBitPrice] = React.useState('');

  function InputPriceBit(event){
    setBitPrice(event.target.value);
  }

  async function summitReport(){
    console.log(reportDes);
    if(reportDes.length <= 0){
      alert('โปรดใส่รายระเอียด');
    }
    else{
      const itemJson = {
        namereport: detailitemlist.name,
        typereport: 'item',
        desc: reportDes,
        iditem: detailitemlist._id,
      }
      await fetch("http://localhost:3005/createReport", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(itemJson),
      })
      .then((res) => res.json()).then(() => {
          alert('ส่งรายงานเรียบร้อยเเล้ว');
      })
      handleClose();
    }
  }

  async function summitBit(){
    if(bitPrice / detailitemlist.bitprice >= 1.05){
      let notiJson = {
        iduser: id_local,
        nameitem: detailitemlist.name,
        iditem: detailitemlist._id,
        usernamepost: userDetail.username,
        useridpost: userDetail._id,
        itemtype: detailitemlist.type,
        imageURL:detailitemlist.imagePath,
        notistatus:'ontop',
        bitprice: bitPrice,
      }

      let updateNoti = {
        useridpost: userDetail._id,
        iditem:detailitemlist._id,
        bitprice:bitPrice,
        usernamerequest:name_local,
        useridrequest:id_local
      }

      await fetch("http://localhost:3005/updateBit", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateNoti),
      }).then((res) => res.json()).then(() => {
        console.log('UpdateNoti')
      }).catch((e) => console.log(e));

      await fetch("http://localhost:3005/createNoti", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(notiJson),
      })
      .then((res) => res.json()).then(() => {
        alert('เพิ่มราคาสำเร็จเเล้ว');
        setPullDetail(false);
      }).catch((e) => console.log(e));

      


      handleClose2();




    }
    else{
      alert('โปรดใส่ราคาให้มากกว่า 5% ของราคาสินค้า');
    }
  }

  const handleClick = () => {
    navigate("/profile", { state: {userid}})
  }


  return (
    <>
    <Topbar />
    <div className="contrainer-detail">
      <div className='inner-contrainer'>
          <div className='header-image'>
            <img src={detailitemlist.imagePath} className='image-head' alt='logo'/>
          </div>

          <div className='name-contrainer'>
            <h2 className='name-item'>{detailitemlist.name}</h2>
            <div className='group-tag'>
                  <h4 className='tag-item'>#{detailitemlist.tag}</h4>
            </div>
          </div>

          <div className='detail-contrainer'>
            {detailitemlist.type == 'auction' &&
              <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#DB00FF'}}>ประมูล</h4>
                <h4 className='change-tag' style={{color:'#E5529B'}}>ราคาปัจจุบัน {detailitemlist.bitprice} บาท</h4>
                <h4 className='change-tag' style={{color:'#C7C8C7'}}>ราคาเริ่มต้น {detailitemlist.price} บาท</h4>
              </div>
            }
            {detailitemlist.type == 'sell' &&
              <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#05AB9F'}}>ขาย</h4>
                <h4 className='change-tag' style={{color:'#05AB9F'}}>฿ {detailitemlist.price}</h4>
                {/* <h4 className='change-tag' style={{color:'#000000'}}>จำนวนคิว {person_interest} คิว</h4> */}
              </div>
            }
            {detailitemlist.type == 'give' &&
              <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#E5529B'}}>ส่งต่อ</h4>
                {/* <h4 className='change-tag' style={{color:'#000000'}}>จำนวนคิว {person_interest} คิว</h4> */}
              </div>
            }
            
            <div className='icon-item'>
                <button className='button-icon' onClick={handleOpen}>
                  <FontAwesomeIcon icon={faFlag} className="icon-report"/>
                </button>
                {/* <img src={logo} className='icon' alt='iconic'/>
                <img src={logo} className='icon' alt='iconic'/> */}
            </div>
          </div>
          <div className='line-contrainer'>
            <hr className='line'/>
          </div>
          <div className='profile-tag'>
            <img src={userDetail.imageuserpath} className='image-profile' alt='profile'/>
            <h4 className='name-tag'>{userDetail.username}</h4>
            {/* <p className='give-tag'>จำนวนการให้ {userDetail.faculty}</p> */}
          </div>
          <div className='line-contrainer'>
            <hr className='line'/>
          </div>
          <div className='head-detail'>
            <h2>รายละเอียดสินค้า</h2>
          </div>
          <div className='detail-item'>
            <h3 className='text-detail'>{detailitemlist.desc}</h3>
          </div>
          <div className='buttom-group'>

                {detailitemlist.type == 'auction' &&
                  <button className='buttom-pass' onClick={handleOpen2}>
                    <h2 style={{margin: 0, fontWeight:300, color:'white'}}>เสนอราคาสินค้า</h2>
                  </button>
                }
                {detailitemlist.type == 'sell' &&
                <button className='buttom-pass' onClick={summitInterest}>
                  <h2 style={{margin: 0, fontWeight:300, color:'white'}}>สนใจของ</h2>
                </button>
                  
                }
                {detailitemlist.type == 'give' &&
                <button className='buttom-pass' onClick={summitInterest}>
                  <h2 style={{margin: 0, fontWeight:300, color:'white'}}>สนใจของ</h2>
                </button>
                  
                }

            
            <button className='buttom-pass'>
                <h2 style={{margin: 0, fontWeight:300, color:'white'}} onClick={handleClick}>โปรไฟล์เจ้าของ</h2>
            </button>
          </div>
      </div>

      <div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                timeout: 500,
                },
            }}>
            <Fade in={open}>
                <Box className='modal-report'>
                    <div className='modal-head'>
                        <h1 style={{marginBottom:'0', marginLeft:"0"}}>รายงานสิ่งที่ผิดหลักชุมชน</h1>
                        <hr className='line2'/>
                    </div>
                    <div className='form-in'>
                        <form>
                            <div className='box-over'>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ชื่อที่ถูกรายงาน</h3>
                                    <input type="text" placeholder="Name" style={{width:'90%', height:'40px', borderRadius:'20px',padding:'2%'}} value={detailitemlist.name} readOnly/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ประเภท</h3>
                                    <input type="text" placeholder="Name" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}} value={telltype} readOnly/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>คำอธิบาย</h3>
                                    <textarea placeholder="คำอธิบาย" rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}} value={reportDes} onChange={InputReportDes}/>
                                </div>
                            </div>
                        </form>
                        <div className='button-con'>
                            <button className='button-summit' onClick={summitReport}>
                                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>รายงาน!</h2>
                            </button>
                        </div>
                    </div>
                </Box>
            </Fade>
            </Modal>
      </div>


      <div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                timeout: 500,
                },
            }}>
            <Fade in={open2}>
                <Box className='modal-bit'>
                    <div className='modal-head'>
                        <h1 style={{marginBottom:'0', marginLeft:"0"}}>ประมูลราคา</h1>
                        <hr className='line2'/>
                    </div>
                    <div className='form-in'>
                        <form>
                            <div className='box-over'>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ชื่อ</h3>
                                    <input type="text" placeholder="Name" style={{width:'90%', height:'40px', borderRadius:'20px',padding:'2%'}} readOnly value={detailitemlist.name}/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ราคาปัจจุบัน</h3>
                                    <input type="number" placeholder="Name" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}} value={detailitemlist.bitprice} readOnly/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ราคา</h3>
                                    <input type="number" placeholder="ใส่ราคาได้เลย" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}} value={bitPrice} onChange={InputPriceBit}/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>*ราคาประมูลต้องมากกว่าราคาสินค้า ณ ปัจจุบัน</h3>
                                </div>
                            </div>
                        </form>
                        <div className='button-con'>
                            {/* อย่าลืมใส่ onclick summitbit */}
                            <button className='button-summit' onClick={summitBit}>
                                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>ประมูล</h2>
                            </button>
                        </div>
                    </div>
                </Box>
            </Fade>
            </Modal>
      </div>

    </div>
    </>
  );
}

export default DetaiIitem;
