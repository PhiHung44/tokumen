import {Container, Row, Col} from 'react-bootstrap';
const Footer = (props) => {
    return (
        <Container fluid className='py-3' style={{backgroundColor:'#9F2E3C'}}>
            <Container className='Footer-PC'>
                <Row>
                    <Col style={{color:'#FFF'}}>
                        <a href="https://alipas.com.vn" title="Alipas Mới"><img alt="logo" class="img-resposive" src="https://alipas.com.vn/wp-content/uploads/2023/02/logo.png" width="315" height="91"/></a>
                        <div class="mt_20">
                            <p><strong>CÔNG TY CỔ PHẦN DƯỢC PHẨM SAGOPHACO</strong><br/>Giấy chứng nhận ĐKKD số 0102637020 do sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 29/01/2008<br/><br/>
                            <img src="https://alipas.com.vn/wp-content/uploads/2023/04/dia-chi-alipas-moi.png" alt='img'/>23/47 Nguyễn Hữu Tiến, phường Tây Thạnh, quận Tân Phú, TP.Hồ Chí Minh<br/>
                            <img src="https://alipas.com.vn/wp-content/uploads/2023/04/so-dien-thoai-alipas-moi.png" alt='img'/><a href="tel:+842871026089" style={{color:'#fff'}}> (84 28) 1234 5678</a><br/>
                            <img src="https://alipas.com.vn/wp-content/uploads/2023/04/email-alipas-moi.png" alt='img'/> Email: cskh@sagophaco.com.vn<br/><br/>
                            Bản quyền&nbsp;© 2014 thuộc về CÔNG TY CỔ PHẦN DƯỢC PHẨM SAGOPHACO</p>               
                        </div>
                    </Col>
                    <Col>
                        <Row style={{color:'#fff',paddingTop:'50px'}}>
                            <Col>
                                <h5>THÔNG TIN</h5>
                                <div>
                                    <ul style={{listStyle:'none',fontSize:'17px',fontWeight:'600',lineHeight:'35px'}}>
                                        <li>Giới thiệu</li>
                                        <li>Chính sách mua hàng</li>
                                        <li>Điều khoản sử dụng</li>
                                        <li>Miễn trừ trách nhiệm</li>
                                        <li>Chính sách bảo mật thông tin</li>
                                        <li>Liên Hệ</li>
                                    </ul>
                                </div>
                                <h5>LIÊN KẾT VỚI CHÚNG TÔI</h5>
                            </Col>
                            <Col>
                                <h5>CHỨNG NHẬN</h5>
                               <Row>
                                    <Col>
                                        <img src="https://tinnhiemmang.vn/handle_cert?id=alipas.com.vn" alt='img' style={{width:'120px',height:'50px'}}/>
                                    </Col>
                                    <Col>
                                        <img src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=d559761b-d67b-49db-a7b7-8e19686deb81" alt='img'/>
                                        <img src="https://alipas.com.vn/images/bct.png" alt='img'/>
                                    </Col>
                               </Row>
                            </Col>  
                        </Row>
                    </Col>
                </Row>
           </Container>
           <Container className='Footer-Mobile'>
                <Row>
                    <Row style={{color:'#FFF'}}>
                        <a href="https://alipas.com.vn" title="Alipas Mới"><img alt="logo" class="img-resposive" src="https://alipas.com.vn/wp-content/uploads/2023/02/logo.png" width="315" height="91"/></a>
                        <div class="mt_20">
                            <p><strong>CÔNG TY CỔ PHẦN DƯỢC PHẨM SAGOPHACO</strong><br/>Giấy chứng nhận ĐKKD số 0102637020 do sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 29/01/2008<br/><br/>
                            <img src="https://alipas.com.vn/wp-content/uploads/2023/04/dia-chi-alipas-moi.png" alt='img'/>23/47 Nguyễn Hữu Tiến, phường Tây Thạnh, quận Tân Phú, TP.Hồ Chí Minh<br/>
                            <img src="https://alipas.com.vn/wp-content/uploads/2023/04/so-dien-thoai-alipas-moi.png" alt='img'/><a href="tel:+842871026089" style={{color:'#fff'}}> (84 28) 1234 5678</a><br/>
                            <img src="https://alipas.com.vn/wp-content/uploads/2023/04/email-alipas-moi.png" alt='img'/> Email: cskh@sagophaco.com.vn<br/><br/>
                            Bản quyền&nbsp;© 2014 thuộc về CÔNG TY CỔ PHẦN DƯỢC PHẨM SAGOPHACO</p>               
                        </div>
                    </Row>
                    <Row>
                        <Row style={{color:'#fff',paddingTop:'50px'}}>
                            <Col xs={8}>
                                <h5>THÔNG TIN</h5>
                                <div>
                                    <ul style={{listStyle:'none',fontSize:'17px',fontWeight:'600',lineHeight:'35px',paddingLeft:'0px'}}>
                                        <li>Giới thiệu</li>
                                        <li>Chính sách mua hàng</li>
                                        <li>Điều khoản sử dụng</li>
                                        <li>Miễn trừ trách nhiệm</li>
                                        <li>Chính sách bảo mật thông tin</li>
                                        <li>Liên Hệ</li>
                                    </ul>
                                </div>
                                <h5>LIÊN KẾT VỚI CHÚNG TÔI</h5>
                            </Col>
                            <Col xs={4}>
                                <h5>CHỨNG NHẬN</h5>
                               <Row>
                                    <Col>
                                        <img src="https://tinnhiemmang.vn/handle_cert?id=alipas.com.vn" alt='img' style={{width:'120px',height:'50px'}}/>
                                    </Col>
                                    <Col>
                                        <img src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=d559761b-d67b-49db-a7b7-8e19686deb81" alt='img'/>
                                        <img src="https://alipas.com.vn/images/bct.png" alt='img'/>
                                    </Col>
                               </Row>
                            </Col>  
                        </Row>
                    </Row>
                </Row>
           </Container>
        </Container>
    )
}

export default Footer