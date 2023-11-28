import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col } from 'react-bootstrap';
import Logo from '../Image/logoTokuMen-nobg.png'
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 448 512" style={{fill:'#FFF'}}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </div>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:'#000',width:'80%',height:'100%'}}>
        <Offcanvas.Header closeButton style={{fill:'#FFF'}}>
          <Offcanvas.Title>
            <Col>
              <img src={Logo} class="img-fluid" alt="Logo_1" style={{width:'310px',height:'90px'}}/>
            </Col>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{listStyle:'none',color:'#FFF', fontSize:'18.5px',paddingLeft:'0px',fontWeight:'500  '}}>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Trang chủ</li>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Alipas Mới</li>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Mua hàng</li>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Bệnh lý nam khoa</li>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Sức khỏe sinh lí</li>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Khuyến mãi</li>
            <li style={{borderBottom:'1.5px solid #FFF',paddingBottom:'10px',paddingTop:'10px'}}>Hỏi đáp</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;