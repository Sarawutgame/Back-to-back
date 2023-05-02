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
import Topbar from '../components/Topbar/Topbar';
// import axios from 'axios';
import { useEffect } from 'react';






function Item(props) {
    // const [file, setFile] = useState();
    // function handleImg(e) {
        
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
    // const { id, itemname, image, itemtype, dateend, price } = props;

    const {_id, type, tag, price, name, imagePath, desc, daytime, __v} = props;
    // console.log(id, image);
    // console.log(itemtype === 'bit')
    let dateend = '01/01/2023';
    return (
        <div className='card-item'>
            <img src={imagePath} className="item-image" alt="logo" />
            <div className='card-text'>
                <p style={{ margin: '0', fontSize: 14 }}>{name}</p>
                <div style={{ margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                        type === 'give' &&
                        <h4 style={{ margin: '0', fontSize: 22, color: '#E5529B', fontWeight: 300 }}>ส่งต่อ</h4>
                    }
                    {
                        type === 'sell' &&
                        <h4 style={{ margin: '0', fontSize: 22, color: '#05AB9F', fontWeight: 300 }}>฿{price}</h4>
                    }
                    {
                        type === 'auction' &&
                        <h4 style={{ margin: '0', fontSize: 22, color: '#DB00FF', fontWeight: 300 }}>฿{price}</h4>
                    }
                    <div style={{ display: 'flex' }}>
                        {
                            type === 'bit' &&
                            <h4 style={{ margin: '0', fontSize: 12, color: '#E0352D', fontWeight: 300, verticalAlign: 'text-bottom', marginTop: '1vh' }}>หมดวันที่ {dateend}</h4>
                        }

                    </div>

                </div>
            </div>
        </div>

    );
}




function CoverItem() {
    // let pullitem = false
    const [pullitem, setPullItem] = useState(false);
    // let allitem = []
    const [allitem, setAllItem] = useState([]);
    

    const [file, setFile] = useState();
    const [fileimg, setfileimg] = useState();
    const [imgPath, setImgPath] = useState();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [tag, setTag] = useState('');
    const [price, setPrice] = useState('');
    const [typeItem, settypeItem] = React.useState('All');

    const inputName = (event) => {
        setName(event.target.value);
    }
    const inputDesc = (event) => {
        setDesc(event.target.value);
    }
    const inputTag = (event) => {
        setTag(event.target.value);
    }
    const inputPrice = (event) => {
        setPrice(event.target.value);
    }

    useEffect(() => {
        fetch("http://localhost:3005/allitem", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((value) => {
            setAllItem(value)
            // allitem=value;
            console.log(allitem);
            setPullItem(true)
            })
        //Runs only on the first render
      }, [pullitem]);



    async function UploadimageToNode(){
        let local_iduser = '644fc1664a26b861c8170394';
        let local_nameuser = 'Pun';
        let notfillfull = false;

        if(fileimg == null){
            notfillfull = true;
        }else if(name.length <= 0){
            notfillfull = true;
        }else if(typeInItem.length <= 0){
            notfillfull = true;
        }else if(desc.length <= 0){
            notfillfull = true;
        }else if(price.length <= 0){
            notfillfull = true;
        }
        // console.log(fileimg);
        // console.log(name.length);
        // console.log(typeInItem);
        // console.log(desc);
        // console.log(price);
        // console.log(notfillfull + '------ ANS');
        if(notfillfull == true){
            alert('Plase Enter Every input');
        }else{
            // alert('pass');
            let imageURLS3 = '';
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
                imageURLS3=value.fileurl;
                setPullItem(false);
            })
            .catch(err => console.log(err));

            // const itemForm = new FormData();
            const itemJson = {
                imagePath: imageURLS3,
                name: name,
                type: typeInItem,
                desc: desc,
                tag: tag,
                price: price,
                iduser: local_iduser,
                nameuser: local_nameuser,
                status: 'wait',
                bitprice: price,
                iduserwinbit: 'ยังไม่มีคนสนใจ',
                nameuserwinbi:''
            }

            // const newJSON = JSON.stringify(itemJson)
            // itemForm.append("Json", itemJson)
            console.log(itemJson)
            let itemreturntype = ''
            let request = {}
            await fetch("http://localhost:3005/createItem", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemJson),
            })
            .then((res) => res.json()).then((value) => {
                console.log(value._id)
                itemreturntype = value.type;
                if(value.type == 'auction'){
                        request = {
                        iduser: value.iduser,
                        iditem: value._id,
                        nameitem: value.name,
                        usernamerequest: 'ยังไม่มีใครสนใจ',
                        useridrequest: '',
                        itemtype: value.type,
                        imageURL: value.imagePath,
                        bitprice: value.price,
                        requeststatus:'progress'
                    }
                }
                
            })
            console.log(itemreturntype);
            if(itemreturntype == 'auction'){
                await fetch("http://localhost:3005/createRequest", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(request),
                    })
                    .then((res) => res.json()).then(() => {
                    }).catch((e) => console.log(e));
            }
            alert('สร้างสิ่งของสำเร็จ');
            handleClose();
        }




        
    }

    function handleImg(e) {
        console.log(e.target.files);
        setfileimg(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleChange = (event) => {
        settypeItem(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [typeInItem, settypeInItem] = React.useState('');
    const handleInChange = (event) => {
        settypeInItem(event.target.value);
        // console.log(typeInItem)
    };

    const mockItem = [{ id: '1', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },
    { id: '2', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-500', image: 'Eiei', itemtype: 'bit', dateend: '28/04/2023', price: '30' },
    { id: '3', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'give', dateend: '-', price: '30' },
    { id: '4', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },
    { id: '5', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },
    { id: '6', itemname: 'ยางลบดินสอ ก้อนเล็ก ซากุระ Foam XRFW-100', image: 'Eiei', itemtype: 'sell', dateend: '-', price: '30' },]
    console.log(allitem);
    return (
        <>
        <Topbar />
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
                        <MenuItem value="All">ทั้งหมด</MenuItem>
                        <MenuItem value='give'>ให้</MenuItem>
                        <MenuItem value='sell'>ขาย</MenuItem>
                        <MenuItem value='bit'>ประมูล</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <hr className='line' />
            <div className='contraniner-item'>
                {allitem.map((el_item) => {
                    return <Item {...el_item} key={el_item._id} />
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
                                            <input type="text" placeholder="Name" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={inputName} value={name}/>
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
                                                <MenuItem value={""}>
                                                    <em>โปรดเลือกประเภท</em>
                                                </MenuItem>
                                                <MenuItem value={"give"} >ให้</MenuItem>
                                                <MenuItem value={"sell"}>ขาย</MenuItem>
                                                <MenuItem value={"auction"}>ประมูล</MenuItem>
                                            </Select>
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>ราคา</h3>
                                            <input type='number' placeholder="Price" style={{ width: '50%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={(inputPrice)} value={price}/>
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>คำอธิบาย</h3>
                                            <textarea placeholder="คำอธิบาย" rows={3} style={{ width: '90%', borderRadius: '20px', padding: '2%' }} onChange={(inputDesc)} value={desc}/>
                                        </div>
                                        <div style={{ marginBottom: '2%' }}>
                                            <h3 style={{ margin: '0', marginLeft: '2%' }}>TAG</h3>
                                            <input type='text' placeholder="Tag" style={{ width: '50%', height: '40px', borderRadius: '20px', padding: '2%' }} onChange={(inputTag)} value={tag}/>
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
        </>



    );
}

export default CoverItem;
