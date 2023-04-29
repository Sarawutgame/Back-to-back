import logo from '../logo.svg'
import './notification.css'
import sunflower from '../Sunflower.jpg'

function NotiItemToOhter(){
  return(
    <div className='notiitem'>
        <div className='info'>
          <h2 style={{margin:'0'}}>Punnaton Khasawick</h2>
          <h3 style={{margin:'0'}}>ดอกไม่เเห้ง</h3>
          <h3 style={{margin:'0', color:'#E5529B'}}>ขาย</h3>
          <h3 style={{margin:'0'}}>ได้คืวที่ 2</h3>
          
        </div>
        <div className='picture'>
          <img src='https://postimagebucket.s3.amazonaws.com/ffc5dd4d-8b4a-4dd1-977c-7e803ba4c9d5.jpg' className="noti-image" alt="logo" />
        </div>

    </div>
  );
}

function NotiItemToMe(){
  return(
    <div className='notiitem'>
        <div className='info'>
          <h2 style={{margin:'0'}}>Punnaton Khasawick</h2>
          <h3 style={{margin:'0'}}>ดอกไม่เเห้ง</h3>
          <h3 style={{margin:'0', color:'#E5529B'}}>ขาย</h3>
          <h3 style={{margin:'0'}}>คนที่ 1</h3>
          
        </div>
        <div className='picture'>
          <img src={sunflower} className="noti-image" alt="logo" />
        </div>

    </div>
  );
}





function Notification() {
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
              <NotiItemToOhter/>
              <NotiItemToOhter/>
              <NotiItemToOhter/>
              <NotiItemToOhter/>
              <NotiItemToOhter/>
              <NotiItemToOhter/>

            </div>
            <div className='noti-right'>
                <NotiItemToMe/>
                <NotiItemToMe/>
                <NotiItemToMe/>
                <NotiItemToMe/>

            </div>
          </div>
      </div>
    </div>
  );
}

export default Notification;
