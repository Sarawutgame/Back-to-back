import logo from '../logo.svg'
import './notification.css'
import sunflower from '../Sunflower.jpg'
import { useState, useEffect } from 'react'

function NotiItemToOhter(props){
  const {_id, iduser, nameitem, iditem, usernamepost, useridpost, itemtype, notistatus, time, __v, imageURL} = props;
  // console.log(usernamepost)
  return(
    <div className='notiitem'>
        <div className='info'>
          <h2 style={{margin:'0'}}>{usernamepost}</h2>
          <h3 style={{margin:'0'}}>{nameitem}</h3>
          <h3 style={{margin:'0', color:'#E5529B'}}>{itemtype}</h3>
          {notistatus === 'accept' &&
            <h3 style={{margin:'0', color:'#05AB9F'}}>ยืนยันเเล้ว</h3>
          }
          {notistatus === 'wait' &&
            <h3 style={{margin:'0'}}>รอการยืนยัน</h3>
          }
          {notistatus === 'reject' &&
            <h3 style={{margin:'0', color:'#DC143C'}}>ถูกปฎิเสธ</h3>
          }
          
        </div>
        <div className='picture'>
          <img src={imageURL} className="noti-image" alt="logo" />
        </div>

    </div>
  );
}

function NotiItemToMe(props){
  const {_id, iduser, iditem, nameitem, usernamerequest, useridrequest, itemtype, requeststatus, imageURL, time, __v} = props;

  async function summitNotification(){

    let updateReceiveJSON = {
      idreceive: _id,
      iduser: iduser,
      iditem:iditem,
      useridrequest:useridrequest,
      status:'accept'
    }

    await fetch("http://localhost:3005/updateReceive", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateReceiveJSON),
    })
    .then((res) => res.json()).then(() => {
      alert('คุณยืนยันเรียบร้อยเเล้ว');
    })
  }

  async function rejectNotification(){

    let updateReceiveJSON = {
      idreceive: _id,
      iduser: iduser,
      iditem:iditem,
      useridrequest:useridrequest,
      status:'reject'
    }
    
    await fetch("http://localhost:3005/updateReceiveReject", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateReceiveJSON),
    })
    .then((res) => res.json()).then(() => {
      alert('ทำการปฏิเสธเเล้ว');
    })
    
  }

  let update_status = 'waiting'
  return(

    <div className='notiitem'>
        <div className='info'>
          <h2 style={{margin:'0'}}>{usernamerequest}</h2>
          <h3 style={{margin:'0'}}>{nameitem}</h3>
          <h3 style={{margin:'0', color:'#E5529B'}}>{itemtype}</h3>
          <div>
            {requeststatus === 'wait' &&
              <div>
                <button className='summit-button' onClick={summitNotification}>
                  <h3 style={{ margin: 0, fontWeight: 300, color: 'white' }}>ยืนยัน</h3>
                </button>
                <button className='reject-button' onClick={rejectNotification}>
                  <h3 style={{ margin: 0, fontWeight: 300, color: 'white' }}>ปฎิเสธ</h3>
                </button>
              </div>
            }
            {requeststatus === 'accept' &&
              <h3 style={{margin:0}}>ให้คนนี้</h3>
            }
            {requeststatus === 'reject' &&
              <h3 style={{margin:0}}>ปฏิเสธ</h3>
            }

          </div>
          
        </div>
        <div className='picture'>
          <img src={imageURL} className="noti-image" alt="logo" />
        </div>

    </div>
  );
}





function Notification() {
  const id_local = '6450a7a8eea98b8f59586b44';
  // const id_local = '644fc1664a26b861c8170394';
  const name_local = 'Pun';
  const role_local = '';
  const [pullnotiinfo, setPullNotiinfo] = useState(false);
  const [historynoti, setHistiryNoti] = useState([]);
  const [receive, setReceiveNoti] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/getnotiHistory/" + id_local, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((value) => {
        setHistiryNoti(value);
        // allitem=value;
        // console.log(historynoti);
    })


    fetch("http://localhost:3005/getnotiResive/" + id_local, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((value) => {
        setReceiveNoti(value);
        // allitem=value;
        console.log(receive);
        setPullNotiinfo(true);
    })
    
    
  }, [pullnotiinfo]);

  return (
    <div className="contrainer">
      <div className='inner-contrainer'>
          <div className='header'>
            <h1>การเเจ้งเตือน</h1>
          </div>
          <div className='top-contrainer'>
            <div className='head-left'>
              <div style={{backgroundColor:'#05AB9F', borderRadius:'40px', width:'50%', textAlign:'center', height:'50px'}}>
                <h1 style={{color:'white', fontWeight:'normal', margin:'0px'}}>สิ่งที่สนใจ</h1>
              </div>
            </div>
            <div className='head-right'>
              <div style={{backgroundColor:'#05AB9F', borderRadius:'40px', width:'50%', textAlign:'center'}}>
                <h1 style={{color:'white', fontWeight:'normal', margin:'0px'}}>คนที่สนใจ</h1>
              </div>
            </div>
          </div>

          <div className='noti-contrainer'>
            <div className='noti-left'>
              {historynoti.map((h_noti) =>{
                return <NotiItemToOhter {...h_noti} key={h_noti._id}/>
              })}

            </div>
            <div className='noti-right'>
               {receive.map((receive_item) => {
                  return <NotiItemToMe {...receive_item} key={receive_item._id}/>
               })}

            </div>
          </div>
      </div>
    </div>
  );
}

export default Notification;
