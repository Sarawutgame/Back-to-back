import React, { useState } from 'react'
import "./modal.css"

// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Modal({ closeModal }) {
  const [typeInItem, settypeInItem] = React.useState('');
  const [desc, setDesc] = useState('');
  const user = JSON.parse(localStorage.getItem("user"));

  const handleInChange = (event) => {
    settypeInItem(event.target.value);
  };
  const inputDesc = (event) => {
    setDesc(event.target.value);
  }

  const [file, setFile] = useState();
  const [fileimg, setfileimg] = useState();
  const [imgPath, setImgPath] = useState();
  const [pullitem, setPullItem] = useState(false);

  async function createPost(){    

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



    const postJson = {
      userId: user._id,
      username: user.username,
      type: typeInItem,
      desc: desc,
      imgPath: imageURLS3,
      like: 0,
      imageuserpath: user.imageuserpath
      // comments: [],
    }
    // console.log(JSON.stringify(postJson))
    await fetch("http://localhost:3005/createPost", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postJson)
    })
    .then((res) => res.json());
  }

  function handleImg(e) {
    console.log(e.target.files);
    setfileimg(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
}


  return (
    <div className='modalBackground'>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <div className="modalTitle">
              <h1 style={{marginBottom:'10px'}}>สร้างโพส</h1>
            </div>

          </div>
          <hr className='line2' />
          <div className="modalBody">
            <div className='profile-tag'>
              <img src={user.imageuserpath} className='image-profile' alt='profile'/>
              <h4 className='name-tag'>{user.username}</h4>
            </div>
            <div style={{ marginBottom: '2%' }}>
            <div style={{ marginBottom: '2%' }}>
                    <h3 style={{ margin: '0', marginLeft: '2%' }}>รูปภาพ</h3>
                    <input type="file" onChange={handleImg} placeholder="รูปภาพ" style={{ width: '90%', height: '50px', borderRadius: '20px', padding: '2%' }} className='up-input-css' />
                    {/* <div className='contraner-up-image'>
                      <img src={file} className='up-image'></img>
                    </div> */}
                    
                </div>
              <h4 style={{ margin: '0', marginLeft: '2%' }}>ประเภท</h4>
              <Select
                  labelId="input-select-small"
                  id="input-select-small"
                  value={typeInItem}
                  label="ทั้งหมด"
                  onChange={handleInChange}
                  style={{ width: '50%', borderRadius: '20px', height: '40px', borderColor: 'black' }}
                  >
                  <MenuItem value={""} >เลือกประเภท</MenuItem>
                  <MenuItem value={"Talking"}>พูดคุย</MenuItem>
                  <MenuItem value={"Finding"}>หาของ</MenuItem>
              </Select>
            </div>
            <div style={{ marginBottom: '2%' }}>
                <h3 style={{ margin: '0', marginLeft: '2%' }}>คำอธิบาย</h3>
                <textarea placeholder="คำอธิบาย" rows={3} style={{ width: '90%', borderRadius: '20px', padding: '2%' }} onChange={inputDesc} value={desc} />
            </div>
          </div>
          <div className="modalFooter">
            <button style={{backgroundColor:'#b02121', borderRadius:'30px'}} onClick={() => closeModal(false)}>ยกเลิก</button>
            <button style={{backgroundColor:'#05AB9F', borderRadius:'30px'}} onClick={createPost}>โพส</button>
          </div>
        </div>
    </div>
  )
}

export default Modal