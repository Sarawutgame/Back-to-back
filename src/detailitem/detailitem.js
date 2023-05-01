import logo from '../logo.svg'
import './detailitem.css'
import sunflower from '../Sunflower.jpg'

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






function DetaiIitem() {
  const nameitem = 'ดอกไม้ตกแต่ง';
  const tag = ['อุปกรณ์การเรียน', 'ดอกไม้'];
  const typeitem = 'bit';
  const price = 30;
  const start_price = 30;
  const end_date = '08/04/2023'
  const person_interest = 0;
  const detailitem = 'ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง'
  const user = {id_user:'123456',user_name:'Punnaton Khasawick', give_away:4}


  
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


  function summitInterest(){
    alert('เพิ่มความสนใจเเล้ว');
  }

  function InputReportDes(event){
    setReportDes(event.target.value);
  }

  const [bitPrice, setBitPrice] = React.useState('');

  function InputPriceBit(event){
    setBitPrice(event.target.value);
  }

  function summitReport(){
    console.log(reportDes);
    if(reportDes.length <= 0){
      alert('โปรดใส่รายระเอียด');
    }
    else{
      handleClose2();
    }
  }

  function summitBit(){
    if(bitPrice / price >= 1.05){
      alert('เพิ่มราคาสำเร็จเเล้ว');
      handleClose2();
    }
    else{
      alert('โปรดใส่ราคาให้มากกว่า 5% ของราคาสินค้า');
    }
  }


  return (
    <div className="contrainer">
      <div className='inner-contrainer'>
          <div className='header-image'>
            <img src={sunflower} className='image-head' alt='logo'/>
          </div>

          <div className='name-contrainer'>
            <h2 className='name-item'>{nameitem}</h2>
            <div className='group-tag'>
                {tag.map((tag_item) =>{
                    return <h4 className='tag-item' key={tag_item}>#{tag_item}</h4>
                })}
                
            </div>
          </div>

          <div className='detail-contrainer'>
            {typeitem == 'bit' &&
              <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#DB00FF'}}>ประมูล</h4>
                <h4 className='change-tag' style={{color:'#E5529B'}}>ราคาปัจจุบัน {price} บาท</h4>
                <h4 className='change-tag' style={{color:'#C7C8C7'}}>ราคาเริ่มต้น {start_price} บาท</h4>
                <h4 className='change-tag' style={{color:'#E0352D'}}>หมดวันที่ {end_date}</h4>
              </div>
            }
            {typeitem == 'sell' &&
              <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#05AB9F'}}>ขาย</h4>
                <h4 className='change-tag' style={{color:'#05AB9F'}}>฿ {price}</h4>
                <h4 className='change-tag' style={{color:'#000000'}}>จำนวนคิว {person_interest} คิว</h4>
              </div>
            }
            {typeitem == 'give' &&
              <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#E5529B'}}>ส่งต่อ</h4>
                <h4 className='change-tag' style={{color:'#000000'}}>จำนวนคิว {person_interest} คิว</h4>
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
            <img src={logo} className='image-profile' alt='profile'/>
            <h4 className='name-tag'>{user.user_name}</h4>
            <p className='give-tag'>จำนวนการให้ {user.give_away}</p>
          </div>
          <div className='line-contrainer'>
            <hr className='line'/>
          </div>
          <div className='head-detail'>
            <h2>รายละเอียดสินค้า</h2>
          </div>
          <div className='detail-item'>
            <h3 className='text-detail'>{detailitem}</h3>
          </div>
          <div className='buttom-group'>

                {typeitem == 'bit' &&
                  <button className='buttom-pass' onClick={handleOpen2}>
                    <h2 style={{margin: 0, fontWeight:300, color:'white'}}>เสนอราคาสินค้า</h2>
                  </button>
                }
                {typeitem == 'sell' &&
                <button className='buttom-pass' onClick={summitInterest}>
                  <h2 style={{margin: 0, fontWeight:300, color:'white'}}>สนใจของ</h2>
                </button>
                  
                }
                {typeitem == 'give' &&
                <button className='buttom-pass' onClick={summitInterest}>
                  <h2 style={{margin: 0, fontWeight:300, color:'white'}}>สนใจของ</h2>
                </button>
                  
                }

            
            <button className='buttom-pass'>
                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>โปรไฟล์เจ้าของ</h2>
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
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ชื่อ</h3>
                                    <input type="text" placeholder="Name" style={{width:'90%', height:'40px', borderRadius:'20px',padding:'2%'}} readOnly/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ประเภท</h3>
                                    <input type="text" placeholder="Name" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}} readOnly/>
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
                                    <input type="text" placeholder="Name" style={{width:'90%', height:'40px', borderRadius:'20px',padding:'2%'}} readOnly/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ราคาปัจจุบัน</h3>
                                    <input type="number" placeholder="Name" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}} value={price} readOnly/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>ราคา</h3>
                                    <input type="number" placeholder="Name" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}} value={bitPrice} onChange={InputPriceBit}/>
                                </div>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>*ราคาประมูลต้องมากกว่าราคาสินค้า ณ ปัจจุบัน</h3>
                                </div>
                            </div>
                        </form>
                        <div className='button-con'>
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
  );
}

export default DetaiIitem;
