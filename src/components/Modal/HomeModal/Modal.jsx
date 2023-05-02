import React, { useState } from 'react'
import "./modal.css"

// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Modal({ closeModal }) {
  const [typeInItem, settypeInItem] = React.useState('');
  const [desc, setDesc] = useState('');

  const handleInChange = (event) => {
    settypeInItem(event.target.value);
  };
  const inputDesc = (event) => {
    setDesc(event.target.value);
  }

  async function createPost(){
    const postJson = {
      userId: "64506e225e0bfe6563a9d81a",
      type: typeInItem,
      desc: desc,
      imgPath: "",
      like: 0,
      comments: [],
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
              <img src='https://postimagebucket.s3.amazonaws.com/0da84249-715f-4aa9-8990-ce47ce976d55.jpg' className='image-profile' alt='profile'/>
              <h4 className='name-tag'>Game Proo</h4>
            </div>
            <div style={{ marginBottom: '2%' }}>
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
            <button style={{backgroundColor:'#b02121', borderRadius:'30px'}} onClick={() => closeModal(false)}>Cancel</button>
            <button style={{backgroundColor:'#05AB9F', borderRadius:'30px'}} onClick={createPost}>Continue</button>
          </div>
        </div>
    </div>
  )
}

export default Modal