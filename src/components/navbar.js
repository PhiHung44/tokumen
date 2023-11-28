import {Container, Row, Col} from 'react-bootstrap';
import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dropdownButton from '../components/dropdownButton';
const Navbar = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <Container fluid style={{backgroundColor:'#9F2E3C',color:'#FFFFFF',fontWeight:'500'}}>
            <Container className='Navbar-PC'>
                <Row className='' style={{paddingTop:'13px',paddingBottom:'13px'}}>
                    <Col>TRANG CHỦ</Col>
                    <Col>ALIPAS MỚI</Col>
                    <Col><a href={'zalo.me/84907659989'} target={'blank'} style={{textDecoration:'none',color:'#fff'}}>MUA HÀNG</a></Col>
                    <Col xs={2}>BỆNH LÝ NAM KHOA</Col>
                    <Col xs={2}>SỨC KHỎE SINH LÝ</Col>
                    <Col>KHUYẾN MÃI</Col>
                    <Col xs={1}>HỎI ĐÁP</Col>
                    <Col xs={1}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:'#fff'}}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></Col> 
                </Row> 
            </Container>
            <Container className='Navbar-Mobile'>
                 
            </Container>
        </Container>
    )
}

export default Navbar