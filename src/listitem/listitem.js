import './listitem.css';

import sunflower from '../Sunflower.jpg'
// import logo from '../logo.svg';
import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import axios from 'axios';






function Item(props) {
    // const [file, setFile] = useState();
    // function handleImg(e) {
        
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
    const { id, itemname, image, itemtype, dateend, price } = props;
    // console.log(id, image);
    // console.log(itemtype === 'bit')
    return (
        <div className='card-item'>
            <img src={sunflower} className="item-image" alt="logo" />
            <div className='card-text'>
                <p style={{ margin: '0', fontSize: 14 }}>{itemname}</p>
                <div style={{ margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                        itemtype === 'give' &&
                        <h4 style={{ margin: '0', fontSize: 22, color: '#E5529B', fontWeight: 300 }}>ส่งต่อ</h4>
                    }
                    {
                        itemtype === 'sell' &&
                        <h4 style={{ margin: '0', fontSize: 22, color: '#05AB9F', fontWeight: 300 }}>฿{price}</h4>
                    }
                    {
                        itemtype === 'bit' &&
                        <h4 style={{ margin: '0', fontSize: 22, color: '#DB00FF', fontWeight: 300 }}>฿{price}</h4>
                    }
                    <div style={{ display: 'flex' }}>
                        {
                            itemtype === 'bit' &&
                            <h4 style={{ margin: '0', fontSize: 12, color: '#E0352D', fontWeight: 300, verticalAlign: 'text-bottom', marginTop: '1vh' }}>หมดวันที่ {dateend}</h4>
                        }

                    </div>

                </div>
            </div>
        </div>

    );
}




function CoverItem() {
    const [file, setFile] = useState();
    const [fileimg, setfileimg] = useState();
    const [imgPath, setImgPath] = useState();
    
    // const [descrip, setdescrip] = useState('Demotest');

    async function UploadimageToNode(){
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
        })
        .catch(err => console.log(err));

        const itemForm = new FormData();
        const itemJson = {
            imagePath: imgPath,
            name: "Pun",
            type: "ขาย",
            desc: "asdf",
            tag: "bruh",
            price: "200"
        }

        // const newJSON = JSON.stringify(itemJson)
        // itemForm.append("Json", itemJson)

        await fetch("http://localhost:3005/createItem", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemJson),
        })
        .then((res) => res.json())
    }

    function handleImg(e) {
        console.log(e.target.files);
        setfileimg(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
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

    const mockItem = [{ id: '1', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },
    { id: '2', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-500', image: 'Eiei', itemtype: 'bit', dateend: '28/04/2023', price: '30' },
    { id: '3', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'give', dateend: '-', price: '30' },
    { id: '4', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },
    { id: '5', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },
    { id: '6', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },]

    return (
        <div className="contrainer">
            <div className='div1'>
                <h1 style={{ marginBottom: '0', marginLeft: "3%" }}>รายการสิ่งของ</h1>
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
            <hr className='line' />
            <div className='contraniner-item'>
                {mockItem.map((el_item) => {
                    return <Item {...el_item} key={el_item.id} />
                })}

            </div>
            <div>
                <button className='create-button' onClick={handleOpen}>
                    <h1 style={{ margin: 0, fontWeight: 300, color: 'white' }}>สร้างรายการสิ่งของ</h1>
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
                                <h1 style={{ marginBottom: '0', marginLeft: "0" }}>รายการสิ่งของ</h1>
                                <hr className='line2' />
                            </div>
                            <div className='form-in'>
                                <form>
                                    <div className='box-over'>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>รูปภาพ</h3>
                                            <input type="file" onChange={handleImg} placeholder="รูปภาพ" style={{ width: '90%', height: '50px', borderRadius: '20px', padding: '2%' }} className='up-input-css' />
                                            <div className='contraner-up-image'>
                                                <img src={file} className='up-image'></img>
                                            </div>
                                            
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>ชื่อ</h3>
                                            <input type="text" placeholder="Name" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} />
                                        </div>

                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>ประเภท</h3>
                                            <Select
                                                labelId="input-select-small"
                                                id="input-select-small"
                                                value={typeInItem}
                                                label="ทั้งหมด"
                                                onChange={handleInChange}
                                                style={{ width: '50%', borderRadius: '20px', height: '40px', borderColor: 'black' }}
                                            >
                                                <MenuItem value={10} >ให้</MenuItem>
                                                <MenuItem value={30}>ขาย</MenuItem>
                                                <MenuItem value={40}>ประมูล</MenuItem>
                                            </Select>
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>ราคา</h3>
                                            <input type='number' placeholder="Price" style={{ width: '50%', height: '40px', borderRadius: '20px', padding: '2%' }} />
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>คำอธิบาย</h3>
                                            <textarea placeholder="คำอธิบาย" rows={3} style={{ width: '90%', borderRadius: '20px', padding: '2%' }} />
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>TAG</h3>
                                            <input type='number' placeholder="Price" style={{ width: '50%', height: '40px', borderRadius: '20px', padding: '2%' }} />
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>ราคา</h3>
                                            <input type='number' placeholder="Price" style={{ width: '50%', height: '40px', borderRadius: '20px', padding: '2%' }} />
                                        </div>
                                    </div>
                                </form>
                                <div className='button-con'>
                                    <button className='button-summit' onClick={UploadimageToNode}>
                                        <h2 style={{ margin: 0, fontWeight: 300, color: 'white' }}>สร้างสิ่งของ</h2>
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
