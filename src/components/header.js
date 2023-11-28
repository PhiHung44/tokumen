import {Container, Row, Col} from 'react-bootstrap';
import Bar from './offCanvas';
import Logo from '../Image/logoTokuMen-nobg.png'
const Header = (props) => {
    return (
        <Container fluid className='py-3' style={{backgroundColor:'#0A0F12'}}>
            <Container className='Header-PC'>
                <Row>
                    <Col xs={6}>
                        <img src={Logo} class="img-fluid" alt="Logo_1" style={{width:'310px',height:'90px'}}/>
                    </Col>
                    <Col xs={3} className='py-3'>
                        <a href="https://zalo.me/84907659989" title="Alipas Mới"><img alt="logo" class="img-resposive" src="https://alipas.com.vn/wp-content/themes/wg/images/btn_order_header.png"style={{width:'220px',height:'55px',float:'right'}}/></a>
                        {/* <img src="https://alipas.com.vn/wp-content/themes/wg/images/btn_order_header.png" class="img-fluid" alt="Logo_2" style={{width:'220px',height:'55px',float:'right'}}/> */}
                    </Col>
                    <Col xs={3} className='py-3'>
                    <a href="https://zalo.me/84907659989" title="Alipas Mới"><img alt="logo" class="img-resposive" src="https://alipas.com.vn/wp-content/themes/wg/images/hotline_header2.png"style={{width:'220px',height:'55px'}}/></a>
                        {/* <img src="https://alipas.com.vn/wp-content/themes/wg/images/hotline_header2.png" class="img-fluid" alt="Logo_3" style={{width:'220px',height:'55px'}}/> */}
                    </Col>
                </Row>
           </Container>
           <Container className='Header-Mobile'>
                <Row>
                    <Col xs={1}>
                        <Bar/>
                    </Col>
                    <Col style={{display:'flex', justifyContent:'center'}}>
                        <img src={Logo} class="img-fluid" alt="Logo_1" style={{width:'310px',height:'90px'}}/>
                    </Col>
                </Row>
           </Container>
        </Container>
    )
}

export default Header