import './listitem.css';

import sunflower from '../Sunflower.jpg'
// import logo from '../logo.svg';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


function Item(){
    return(
        <div className='card-item'>
            <img src={sunflower} className="item-image" alt="logo" />
            <div className='card-text'>
                <p style={{margin:'0', fontSize: 14}}>ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100</p>
                <div style={{margin:'0', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <h4 style={{margin:'0', fontSize: 22, color:'#05AB9F', fontWeight:300}}>฿22</h4>
                    <div style={{display:'flex', }}>
                        <h4 style={{margin:'0', fontSize: 12, color:'#05AB9F', fontWeight:300, verticalAlign:'text-bottom', marginTop:'1vh'}}>หมดวันที่ 28/04/2023</h4>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}


function CoverItem() {
    const [typeItem, settypeItem] = React.useState('');

    const handleChange = (event) => {
      settypeItem(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [typeInItem, settypeInItem] = React.useState('');
    const handleInChange = (event) => {
        settypeInItem(event.target.value);
    };

  return (
    <div className="contrainer">
        <div className='div1'>
            <h1 style={{marginBottom:'0', marginLeft:"3%"}}>รายการสิ่งของ</h1>
            <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small">ทั้งหมด</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={typeItem}
                    label="ทั้งหมด"
                    onChange={handleChange}>
                    <MenuItem value="">
                    <em>เลือก Type</em>
                    </MenuItem>
                    <MenuItem value={10}>ทั้งหมด</MenuItem>
                    <MenuItem value={20}>ให้</MenuItem>
                    <MenuItem value={30}>ขาย</MenuItem>
                    <MenuItem value={40}>ประมูล</MenuItem>
                </Select>
            </FormControl>
        </div>
        <hr className='line'/>
        <div className='contraniner-item'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        <div>
            <button className='create-button' onClick={handleOpen}>
                <h1 style={{margin: 0, fontWeight:300, color:'white'}}>สร้างรายการสิ่งของ</h1>
            </button>
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
                <Box className='modal-create-item'>
                    <div className='modal-head'>
                        <h1 style={{marginBottom:'0', marginLeft:"0"}}>รายการสิ่งของ</h1>
                        <hr className='line2'/>
                    </div>
                    <div className='form-in'>
                        <form>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>ชื่อ</h3>
                                <input type="text" placeholder="Name" style={{width:'90%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                            </div>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>ประเภท</h3>
                                <Select
                                    labelId="input-select-small"
                                    id="input-select-small"
                                    value={typeInItem}
                                    label="ทั้งหมด"
                                    onChange={handleInChange}
                                    style={{width:'50%', borderRadius:'20px', height:'40px', borderColor:'black'}}
                                >
                                    <MenuItem value={10} >ให้</MenuItem>
                                    <MenuItem value={30}>ขาย</MenuItem>
                                    <MenuItem value={40}>ประมูล</MenuItem>
                                </Select>
                            </div>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>ราคา</h3>
                                <input type='number' placeholder="Price" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                            </div>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>คำอธิบาย</h3>
                                <textarea placeholder="คำอธิบาย" rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                            </div>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>TAG</h3>
                                <input type='number' placeholder="Price" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                            </div>
                        </form>
                        <div className='button-con'>
                            <button className='button-summit' onClick={handleClose}>
                                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>สร้างสิ่งของ</h2>
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

export default CoverItem;
