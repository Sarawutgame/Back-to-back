import logo from '../logo.svg'
import './detailitem.css'





function DetaiIitem() {
  return (
    <div className="contrainer">
      <div className='inner-contrainer'>
          <div className='header-image'>
            <img src={logo} className='image-head' alt='logo'/>
          </div>

          <div className='name-contrainer'>
            <h2 className='name-item'>ดอกไม้ตกแต่ง</h2>
            <div className='group-tag'>
                <h4 className='tag-item'>#อุปกรณ์การเรียน</h4>
                <h4 className='tag-item'>#ดอกไม้</h4>
            </div>
          </div>

          <div className='detail-contrainer'>
            <div className='color-detail'>
                <h4 className='change-tag' style={{color:'#DB00FF'}}>ประมูล</h4>
                <h4 className='change-tag' style={{color:'#E5529B'}}>ราคาปัจจุบัน 25 บาท</h4>
                <h4 className='change-tag' style={{color:'#C7C8C7'}}>ราคาเริ่มต้น 20 บาท</h4>
                <h4 className='change-tag' style={{color:'#E0352D'}}>เหลือเวลา 19 hrs</h4>
            </div>
            <div className='icon-item'>
                <img src={logo} className='icon' alt='iconic'/>
                <img src={logo} className='icon' alt='iconic'/>
            </div>
          </div>
          <div className='line-contrainer'>
            <hr className='line'/>
          </div>
          <div className='profile-tag'>
            <img src={logo} className='image-profile' alt='profile'/>
            <h4 className='name-tag'>Punnaton Khasawick</h4>
            <p className='give-tag'>จำนวนการให้ 5</p>
            <p className='give-tag'>จำนวนการรับ 8</p>
          </div>
          <div className='line-contrainer'>
            <hr className='line'/>
          </div>
          <div className='head-detail'>
            <h2>รายละเอียดสินค้า</h2>
          </div>
          <div className='detail-item'>
            <h3 className='text-detail'>ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง ดอกไม่เเห้ง</h3>
          </div>
          <div className='buttom-group'>
            <button className='buttom-pass'>
                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>เสนอราคาสินค้า</h2>
            </button>
            <button className='buttom-pass'>
                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>โปรไฟล์เจ้าของ</h2>
            </button>
          </div>
      </div>
    </div>
  );
}

export default DetaiIitem;
