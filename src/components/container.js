import {Container, Row, Col} from 'react-bootstrap';
import './containerContent.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ImgProduct from '../Image/productTokuMen.png';
import ImgProductMain from '../Image/tokumen.jpg';
const ContainerContent = (props) => {
    return (
        <Container fluid style={{backgroundColor:'#000000',color:'#FFFFFF',padding:'0px'}}>
            <Container fluid className='Content-PC'>
                <Container fluid style={{backgroundColor:'#F0F2F1',color:'#104A7C'}}>
                    <Container><p style={{paddingTop:'7px',paddingBottom:'7px'}}>Trang chủ » Alipas Mới</p></Container>
                </Container>
                <Container>
                    <Row className='py-3'>
                        <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>ALIPAS MỚI</b><br/><b>TRỌN BỘ TINH CHẤT QUÝ</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto'}}></div>
                    </Row> 
                    <Row>
                        <p>Ứng dụng kết quả của hàng trăm công trình nghiên cứu ở cấp độ sinh học phân tử, các nhà khoa học Mỹ đã tạo nên Alipas mới với sự kết hợp từ 3 tinh chất quý là Eurycoma Longifolia, chiết xuất thông biển Pháp và Hàu đại dương cùng nhiều tinh chất khác.</p>
                        <p>Từ đó, Alipas Mới có tác dụng hỗ trợ kích thích cơ thể gia tăng sản sinh Testosterone nội sinh và Nitric Oxide nhanh hơn, mạnh mẽ hơn. Đây là giải pháp vượt trội trong việc hỗ trợ tăng cường khả năng sinh lý, sinh lực sung mãn và sức khỏe toàn thân cho nam giới.</p>
                    </Row>
                    <Row className='py-4'>
                        <h5><b>EURYCOMA LONGIFOLIA</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',marginLeft:'20px',marginTop:'20px'}}></div>
                        <Row>
                            <Col>
                                <div className='Content-Left' style={{backgroundImage:'url("https://alipas.com.vn/wp-content/themes/wg/img/bg_tinhchat_eurycoma_2.jpg")'}}>
                                    <p>
                                        Được biết đến từ hàng trăm năm trước, Eurycoma Longifolia là một loại thảo dược quý có nguồn gốc Đông Nam Á. Tại những quốc gia mà luật pháp cho phép người đàn ông có nhiều vợ, Eurycoma Longifolia rất được quý ông ưa chuộng.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='Content-1'>
                                    <div className='Content-1-child'>
                                        Eurycoma Longifolia chứa các hoạt chất quý như: quassinoid, triterpen, eurycolactone, eurycomalactone, eurycolactone… được mệnh danh là “báu vật hành tinh” dành riêng cho nam giới.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row className='py-4'> 
                        <h5><b>TINH CHẤT TỪ THÔNG BIỂN PHÁP</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',marginLeft:'20px',marginTop:'20px'}}></div>
                        <Row>
                            <Col>
                                <div className='Content-Left' style={{backgroundImage:'url("https://alipas.com.vn/wp-content/themes/wg/img/bg_tinhchat_thongbienphap.jpg")'}}>
                                    <p>
                                    Được khám phá từ thời vua Napoleon, Thông biển Pháp là loại cây quý hiếm sống ở vùng rừng hoang sơ và tự nhiên miền nam nước Pháp. Chuyện kể rằng, nhờ các dưỡng chất bổ dưỡng và quý giá, một số bộ lạc cổ xưa đã sử dụng vỏ cây thông biển Pháp như một loại thuốc thần kỳ.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='Content-1'>
                                    <div className='Content-1-child'>
                                    Thông biển Pháp chứa procyanidin, catechin, taxifolin, Flavangenol và các hoạt chất chống oxy hóa mạnh gấp 20 lần vitamin C và hơn 50 lần so với vitamin E… được xem là “thảo dược vàng” tăng cường sức khỏe độc đáo cho phái mạnh.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row className='py-4'>
                        <h5><b>TINH CHẤT HÀU ĐẠI DƯƠNG</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',marginLeft:'20px',marginTop:'20px'}}></div>
                        <Row>
                            <Col>
                                <div className='Content-Left' style={{backgroundImage:'url("https://alipas.com.vn/wp-content/themes/wg/img/bg_tinhchat_haubien.jpg")'}}>
                                    <p>
                                    Từ xa xưa, hàu đã được y học phương đông đề cao. Các nghiên cứu dinh dưỡng từ cổ chí kim đều khẳng định hàu là món ăn dinh dưỡng vượt trội. Nhiều sử sách có ghi chép lại rằng các vua chúa thời xưa đã dùng món ăn này để “chăm sóc” hậu cung.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='Content-1'>
                                    <div className='Content-1-child'>
                                    Từ xa xưa, hàu đã được y học phương đông đề cao. Các nghiên cứu dinh dưỡng từ cổ chí kim đều khẳng định hàu là món ăn dinh dưỡng vượt trội. Nhiều sử sách có ghi chép lại rằng các vua chúa thời xưa đã dùng món ăn này để “chăm sóc” hậu cung.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                <Container fluid style={{backgroundColor:'#000',paddingBottom:'50px'}}>
                    <Container>
                        <Row className='py-4'>
                            <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>CÔNG DỤNG CỦA ALIPAS MỚI</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <p><b>Alipas Mới</b> có tác dụng hỗ trợ tăng cường Testosterone nội sinh và Nitric Oxide, giúp quý ông giải quyết các vấn đề gặp phải trong đời sống tình dục, lấy lại sự tự tin và phong độ.</p>
                        </Row>
                        <Row>
                            <Col xs={4} style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                <img src={ImgProduct} alt="img" style={{width:'165px',height:'274px'}}/>
                            </Col>
                            <Col xs={8}>
                                <ul>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-1.png" alt="img" className='px-4'/>
                                        <p style={{paddingTop:'10px'}}>Hỗ trợ tăng cường sức khỏe sinh lý – Cải thiện tình trạng rối loạn cương.<br/>Cải thiện hội chứng mãn dục nam.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-2.png" alt="img" className='px-4'/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ cải thiện tình trạng vô sinh – hiếm muộn ở nam giới do tinh trùng yếu.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-3.png" alt="img" className='px-4'/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ giảm nguy cơ tim mạch.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-4.png" alt="img" className='px-4'/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ tăng Testosterone nội sinh, nâng cao thể trạng, tăng cường lực cơ.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-5.png" alt="img" className='px-4'/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ chống mệt mỏi, giảm căng thẳng.</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            
                            <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>THÀNH PHẦN CỦA ALIPAS MỚI</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <table style={{width:'750px', height:'385px'}}>
                                    <thead>
                                        <tr style={{backgroundColor:'#FF9C00',color:'#000'}}>
                                            <th scope="col" className='py-2'>TINH CHẤT</th>
                                            <th scope="col">KHỐI LƯỢNG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{color:'#FF9C00'}}>
                                            <th>Eurycoma Longifolia Extract 200:1</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr style={{color:'#FF9C00'}}>
                                            <th>Oyster Meat Extract (Chiết xuất Hàu)</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Tribulus terrestris Extract</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>L-Arginine HCl</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Horny Goat Weed Extract</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Ginkgo Leaf Extract</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr style={{color:'#FF9C00'}}>
                                            <th>Pine Bark Extract (Chiết xuất Thông biển Pháp)</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Zinc Picolinate</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={2}>Phụ liệu: Gelatin, Corn starch & Magnesium Stearate vừa đủ 1 viên.</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Row>
                    </Container>
                </Container>
                <Container fluid>
                    <Container>
                        <Row className='py-4' style={{backgroundColor:'#000'}}>
                            <Col>
                                <h5 style={{textAlign:'left',marginBottom:'20px'}}><b>ĐỐI TƯỢNG SỬ DỤNG</b></h5>
                                <div style={{width:'8%',height:'2px',backgroundColor:'#9F2E3C'}}></div>
                                <ul className='py-3'>
                                    <li className='list_tick'>Nam giới trên 18 tuổi.</li>
                                    <li>Người mong muốn cải thiện chức năng tình dục , kéo dài thời gian quan hệ, duy trì ham muốn và phong độ, nâng cao sức khỏe toàn thân.</li>
                                </ul>
                            </Col>
                            <Col>
                                <h5 style={{textAlign:'left',marginBottom:'20px'}}><b>CÁCH DÙNG</b></h5>
                                <div style={{width:'8%',height:'2px',backgroundColor:'#9F2E3C'}}></div>
                                <ul className='py-3'>
                                    <li className='list_tick'>Nên dùng thường xuyên.</li>
                                    <li>Uống 1 viên/ ngày<br/>Có thể uống 1 viên x 2 lần/ ngày, trong trường hợp hỗ trợ điều trị các bệnh lý liên quan như hội chứng chuyển hóa...</li>
                                </ul>
                            </Col>
                        </Row> 
                        <Row className='py-4'>
                        {/* <div class="embed-responsive embed-responsive-16by9" style={{display:'flex',justifyContent:'center'}} >
                            <iframe class="embed-responsive-item" src='https://www.youtube.com/embed/E7wJTI-1dvQ' style={{width:'70%'}}
                                    allowfullscreen
                                    title='video'
                            />
                        </div> */}
                        <a class="div_video youtube" href="https://www.youtube.com/watch?v=Not7fZTXshU" rel="nofollow noreferrer noopener" title="video" style={{display:'flex',justifyContent:'center'}}> 
                            <img class="img-responsive " src={ImgProduct} alt="1920x1080 (1)"/>
                        </a>
                        </Row>
                        <Row>
                            <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>TESTOSTERONE</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C   ',margin:'auto',marginBottom:'20px'}}></div>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>TESTOSTERONE LÀ GÌ?</b></p></h5>
                            <p><b style={{color:'#9F2E3C'}}>Testosterone</b> là hormone sinh dục đặc trưng của nam giới, có vai trò to lớn đến gần như toàn bộ cơ thể, từ hệ sinh dục, hệ thần kinh, hệ tim mạch, hệ cơ xương,...Ở người đàn ông trưởng thành, nồng độ Testosterone trong máu đạt mức ổn định trong khoảng 10-35 nanomol/lit, mức này đảm bảo sức khỏe nền tảng và khả năng tình dục.</p>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>VAI TRÒ CỦA TESTOSTERONE</b></p></h5>
                            <p style={{textAlign:'center'}}><b><i>Vai trò của Testosterone đối với đời sống sinh lý nam:</i></b></p>
                            <p>
                                <ul style={{display:'flex',justifyContent:'space-around',fontSize:'17px'}}>
                                    <li>Duy trì ham muốn tình dục</li>
                                    <li>Điều khiển quá trình cương dương</li>
                                    <li>Sản xuất tinh trùng</li>
                                </ul>
                            </p>
                            <p style={{textAlign:'center'}}><b><i>Vai trò của Testosterone đối với sức khỏe toàn thân của nam giới:</i></b></p>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='https://alipas.com.vn/wp-content/uploads/2023/03/vai-tro-cua-testosorone.jpg' alt='img'/>
                            </div>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>NGUỒN GỐC TESTOSTERONE</b></p></h5>
                            <p>Để đáp ứng nhu cầu hoạt động của cơ thể nam giới, vùng dưới đồi của não bộ tiết ra hormone hướng sinh dục GnRH, kích thích tuyến yên phóng thích Luteinizing Hormone (LH) vào máu. Hormone này kích thích các tế bào Leydig ở tinh hoàn thực hiện những phản ứng sinh hóa để sản sinh Testosterone.
                                <br/><br/>Testosterone khuếch tán vào máu, đi đến các cơ quan quan trọng của cơ thể như não bộ, gan, thận, tuyến sinh dục, tuyến tiền liệt, hệ cơ xương và quyết định hoạt động của toàn bộ sức khỏe của người đàn ông. Hầu hết Testosterone được sản xuất tại tinh hoàn, chiếm 95%, còn lại do tuyến thượng thận tiết ra (5%)
                            </p>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>HẬU QUẢ CỦA SUY GIẢM NỒNG ĐỘ TESTOSTERONE</b></p></h5>
                            <p>Sau tuổi 30, nồng độ Testosterone trong cơ thể nam giới bắt đầu giảm, mỗi năm giảm 1% – 2%. Tới tuổi 60, lượng Testosterone của cơ thể chỉ còn 50%. Nếu nồng độ Testosterone trong máu thấp hơn mức trung bình, chức năng sinh lý và sức khỏe toàn thân của nam giới sẽ suy giảm.</p>
                            <div class="text-center"><img fetchpriority="high" decoding="async" class="alignnone size-full wp-image-13576 img-reponsive " src="https://alipas.com.vn/wp-content/uploads/2023/03/bieu-do-suy-giam.jpg" alt="" width="900" height="595"/></div>
                            <div class="text-center"><img decoding="async" class="alignnone size-full img-reponsive wp-image-13577" src="https://alipas.com.vn/wp-content/uploads/2023/03/trieu-chung-ve-suc-khoe.jpg" alt="" width="1024" height="735"/></div>
                            <h5 className='py-3' style={{textAlign:'center',marginBottom:'20px'}}><b>NITRIC OXIDE</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>HOẠT ĐỘNG CƯƠNG DƯƠNG <br/>& NITRIC OXIDE</b></p></h5>
                            <p><b style={{color:'#9F2E3C'}}>Nitric Oxide</b> (viết tắt NO), là một hợp chất được sản sinh bởi tế bào nội mạc mạch máu và được sử dụng ở hầu hết ở các mô và cơ quan trọng cơ thể. Nitric Oxide không chỉ đóng vai trò quan trọng trong hệ tim mạch, mà còn có ý nghĩa quyết định đối với hoạt động của hệ Tiết niệu – Sinh dục, cụ thể là trong hoạt động cương dương.</p>
                            <p>Bản chất của cương dương là quá trình máu dồn về các thể hang và thể xốp ở dương vật tạo ra sự cương cứng. Khi nam giới có ham muốn tình dục, trung tâm phó giao cảm tại tủy sống sẽ gửi tín hiệu kích thích tế bào nội mạc mạch máu ở dương vật gia tăng tổng hợp Nitric Oxide. Nồng độ Nitric Oxide tăng lên giúp tế bào cơ trơn ở động mạch giãn ra, đưa máu dồn về dương vật nhanh và nhiều tạo ra cương cứng.</p>
                            <p>Như vậy, dương vật cương có đủ nhanh và mạnh hay không phụ thuộc vào lượng Nitric Oxide được sinh ra tại mạch máu.</p>
                        </Row>
                        <Row className='py-4'>
                            <p style={{textAlign:'center'}} >Copyright © 2014 Alipas</p>
                            <p style={{textAlign:'center'}}>Các thông tin trên website alipas.com.vn chỉ dành cho mục đích tham khảo, tra cứu không thay thế cho việc chẩn đoán hoặc điều trị y khoa. Alipas không chịu trách nhiệm về những trường hợp tự ý áp dụng mà không có chỉ định của bác sĩ.</p>
                        </Row>
                    </Container>
                </Container>
            </Container>
            {/* Layout Mobile */}
            <Container className='Content-Mobile' style={{padding:'0'}}>
                <Container fluid style={{backgroundColor:'#F0F2F1',color:'#104A7C'}}>
                    <Container><p style={{paddingTop:'7px',paddingBottom:'7px'}}>Trang chủ » Alipas Mới</p></Container>
                </Container>
                <Container  style={{padding:'0'}}>
                    <div className='px-3' style={{backgroundColor:'#9F2E3C',position:'fixed',bottom:'0',width:'100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
                        <Row>
                            <Col className='py-3'>
                                <a href="https://zalo.me/84907659989" title="Alipas Mới"><img alt="logo" class="img-resposive" src="https://alipas.com.vn/wp-content/themes/wg/images/btn_order_header.png"style={{width:'100%',height:'55px',objectFit:'containt',cursor:'pointer'}}/></a>
                                {/* <img src="https://alipas.com.vn/wp-content/themes/wg/images/btn_order_header.png" class="img-fluid" alt="Logo_2" style={{width:'220px',height:'55px',objectFit:'containt',cursor:'pointer'}}/> */}
                            </Col>
                            <Col className='py-3'>
                                <a href="https://zalo.me/84907659989" title="Alipas Mới"><img alt="logo" class="img-resposive" src="https://alipas.com.vn/wp-content/themes/wg/images/hotline_header2.png"style={{width:'100%',height:'55px',objectFit:'containt',cursor:'pointer'}}/></a>
                                {/* <img src="https://alipas.com.vn/wp-content/themes/wg/images/hotline_header2.png" class="img-fluid" alt="Logo_3" style={{width:'220px',height:'55px', objectFit:'containt'}}/> */}
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <Row className='py-3'>
                        <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>ALIPAS MỚI</b><br/><b>TRỌN BỘ TINH CHẤT QUÝ</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto'}}></div>
                    </Row> 
                    <Row>
                        <p>Ứng dụng kết quả của hàng trăm công trình nghiên cứu ở cấp độ sinh học phân tử, các nhà khoa học Mỹ đã tạo nên Alipas mới với sự kết hợp từ 3 tinh chất quý là Eurycoma Longifolia, chiết xuất thông biển Pháp và Hàu đại dương cùng nhiều tinh chất khác.</p>
                        <p>Từ đó, Alipas Mới có tác dụng hỗ trợ kích thích cơ thể gia tăng sản sinh Testosterone nội sinh và Nitric Oxide nhanh hơn, mạnh mẽ hơn. Đây là giải pháp vượt trội trong việc hỗ trợ tăng cường khả năng sinh lý, sinh lực sung mãn và sức khỏe toàn thân cho nam giới.</p>
                    </Row>
                    <Row className='py-4'>
                        <h5><b>EURYCOMA LONGIFOLIA</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',marginLeft:'20px',marginTop:'20px'}}></div>
                        <Row>
                            <Row >
                                <div className='Content-Left' style={{backgroundImage:'url("https://alipas.com.vn/wp-content/themes/wg/img/bg_tinhchat_eurycoma_2.jpg")'}}>
                                    <p>
                                        Được biết đến từ hàng trăm năm trước, Eurycoma Longifolia là một loại thảo dược quý có nguồn gốc Đông Nam Á. Tại những quốc gia mà luật pháp cho phép người đàn ông có nhiều vợ, Eurycoma Longifolia rất được quý ông ưa chuộng.
                                    </p>
                                </div>
                            </Row>
                            <Row className='py-0 px-0'>
                                <div className='Content-1'>
                                    <div className='Content-1-child'>
                                        Eurycoma Longifolia chứa các hoạt chất quý như: quassinoid, triterpen, eurycolactone, eurycomalactone, eurycolactone… được mệnh danh là “báu vật hành tinh” dành riêng cho nam giới.
                                    </div>
                                </div>
                            </Row>
                        </Row>
                    </Row>
                    <Row className='py-4'> 
                        <h5><b>TINH CHẤT TỪ THÔNG BIỂN PHÁP</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',marginLeft:'20px',marginTop:'20px'}}></div>
                        <Row>
                            <Row>
                                <div className='Content-Left' style={{backgroundImage:'url("https://alipas.com.vn/wp-content/themes/wg/img/bg_tinhchat_thongbienphap.jpg")'}}>
                                    <p style={{paddingTop:'20px'}}>
                                        Được khám phá từ thời vua Napoleon, Thông biển Pháp là loại cây quý hiếm sống ở vùng rừng hoang sơ và tự nhiên miền nam nước Pháp. Chuyện kể rằng, nhờ các dưỡng chất bổ dưỡng và quý giá, một số bộ lạc cổ xưa đã sử dụng vỏ cây thông biển Pháp như một loại thuốc thần kỳ.
                                    </p>
                                </div>
                            </Row>
                            <Row className='py-3 px-0'>
                                <div className='Content-1'>
                                    <div className='Content-1-child'>
                                    Thông biển Pháp chứa procyanidin, catechin, taxifolin, Flavangenol và các hoạt chất chống oxy hóa mạnh gấp 20 lần vitamin C và hơn 50 lần so với vitamin E… được xem là “thảo dược vàng” tăng cường sức khỏe độc đáo cho phái mạnh.
                                    </div>
                                </div>
                            </Row>
                        </Row>
                    </Row>
                    <Row className='py-4'>
                        <h5><b>TINH CHẤT HÀU ĐẠI DƯƠNG</b></h5>
                        <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',marginLeft:'20px',marginTop:'20px'}}></div>
                        <Row>
                            <Row>
                                <div className='Content-Left' style={{backgroundImage:'url("https://alipas.com.vn/wp-content/themes/wg/img/bg_tinhchat_haubien.jpg")'}}>
                                    <p>
                                    Từ xa xưa, hàu đã được y học phương đông đề cao. Các nghiên cứu dinh dưỡng từ cổ chí kim đều khẳng định hàu là món ăn dinh dưỡng vượt trội. Nhiều sử sách có ghi chép lại rằng các vua chúa thời xưa đã dùng món ăn này để “chăm sóc” hậu cung.
                                    </p>
                                </div>
                            </Row>
                            <Row className='py-3 px-0'>
                                <div className='Content-1'>
                                    <div className='Content-1-child'>
                                    Từ xa xưa, hàu đã được y học phương đông đề cao. Các nghiên cứu dinh dưỡng từ cổ chí kim đều khẳng định hàu là món ăn dinh dưỡng vượt trội. Nhiều sử sách có ghi chép lại rằng các vua chúa thời xưa đã dùng món ăn này để “chăm sóc” hậu cung.
                                    </div>
                                </div>
                            </Row>
                        </Row>
                    </Row>
                </Container>
                <Container fluid style={{backgroundColor:'#000',paddingBottom:'50px'}}>
                    <Container>
                        <Row className='py-4'>
                            <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>CÔNG DỤNG CỦA ALIPAS MỚI</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <p><b>Alipas Mới</b> có tác dụng hỗ trợ tăng cường Testosterone nội sinh và Nitric Oxide, giúp quý ông giải quyết các vấn đề gặp phải trong đời sống tình dục, lấy lại sự tự tin và phong độ.</p>
                        </Row>
                        <Row>
                            <Row style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                <img src="https://alipas.com.vn/wp-content/uploads/2023/03/Alipas-60V-1.png" alt="img" style={{width:'165px',height:'274px'}}/>
                            </Row>
                            <Col>
                                <ul>
                                    <li className='Content-2 py-2 '>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-1.png" alt="img" className='px-4' style={{objectFit:'contain'}}/>
                                        <p style={{paddingTop:'10px'}}>Hỗ trợ tăng cường sức khỏe sinh lý – Cải thiện tình trạng rối loạn cương.<br/>Cải thiện hội chứng mãn dục nam.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-2.png" alt="img" className='px-4' style={{objectFit:'contain'}}/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ cải thiện tình trạng vô sinh – hiếm muộn ở nam giới do tinh trùng yếu.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-3.png" alt="img" className='px-4' style={{objectFit:'contain'}}/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ giảm nguy cơ tim mạch.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-4.png" alt="img" className='px-4' style={{objectFit:'contain'}}/>
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ tăng Testosterone nội sinh, nâng cao thể trạng, tăng cường lực cơ.</p>
                                    </li>
                                    <li className='Content-2 py-2'>
                                        <img src="https://alipas.com.vn/wp-content/uploads/2023/02/icon-5.png" alt="img" className='px-4' style={{objectFit:'contain'}} />
                                        <p style={{paddingTop:'20px'}}>Hỗ trợ chống mệt mỏi, giảm căng thẳng.</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>THÀNH PHẦN CỦA ALIPAS MỚI</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <table style={{width:'750px', height:'385px'}}>
                                    <thead>
                                        <tr style={{backgroundColor:'#FF9C00',color:'#000'}}>
                                            <th scope="col" className='py-2'>TINH CHẤT</th>
                                            <th scope="col">KHỐI LƯỢNG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{color:'#FF9C00'}}>
                                            <th>Eurycoma Longifolia Extract 200:1</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr style={{color:'#FF9C00'}}>
                                            <th>Oyster Meat Extract (Chiết xuất Hàu)</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Tribulus terrestris Extract</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>L-Arginine HCl</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Horny Goat Weed Extract</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Ginkgo Leaf Extract</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr style={{color:'#FF9C00'}}>
                                            <th>Pine Bark Extract (Chiết xuất Thông biển Pháp)</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th>Zinc Picolinate</th>
                                            <th>240 mg</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={2}>Phụ liệu: Gelatin, Corn starch & Magnesium Stearate vừa đủ 1 viên.</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Row>
                    </Container>
                </Container>
                <Container fluid>
                    <Container>
                        <Row className='py-4' style={{backgroundColor:'#000'}}>
                            <Row>
                                <h5 style={{textAlign:'left',marginBottom:'20px'}}><b>ĐỐI TƯỢNG SỬ DỤNG</b></h5>
                                <div style={{width:'8%',height:'2px',backgroundColor:'#9F2E3C'}}></div>
                                <ul className='py-3'>
                                    <li className='list_tick'>Nam giới trên 18 tuổi.</li>
                                    <li>Người mong muốn cải thiện chức năng tình dục , kéo dài thời gian quan hệ, duy trì ham muốn và phong độ, nâng cao sức khỏe toàn thân.</li>
                                </ul>
                            </Row>
                            <Row>
                                <h5 style={{textAlign:'left',marginBottom:'20px'}}><b>CÁCH DÙNG</b></h5>
                                <div style={{width:'8%',height:'2px',backgroundColor:'#9F2E3C'}}></div>
                                <ul className='py-3'>
                                    <li className='list_tick'>Nên dùng thường xuyên.</li>
                                    <li>Uống 1 viên/ ngày<br/>Có thể uống 1 viên x 2 lần/ ngày, trong trường hợp hỗ trợ điều trị các bệnh lý liên quan như hội chứng chuyển hóa...</li>
                                </ul>
                            </Row>
                        </Row> 
                        <Row className='py-4'>
                        {/* <div class="embed-responsive embed-responsive-16by9" style={{display:'flex',justifyContent:'center'}} >
                            <iframe class="embed-responsive-item" src='https://www.youtube.com/embed/E7wJTI-1dvQ' style={{width:'70%'}}
                                    allowfullscreen
                                    title='video'
                            />
                        </div> */}
                            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                <a href="https://zalo.me/84907659989"> 
                                    <img style={{objectFit:'contain'}} class="img-responsive " src={ImgProduct} alt="1920x1080 (1)" width="100%" height="100%"/>
                                </a>
                            </div>
                        </Row>
                        <Row>
                            <h5 style={{textAlign:'center',marginBottom:'20px'}}><b>TESTOSTERONE</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>TESTOSTERONE LÀ GÌ?</b></p></h5>
                            <p><b style={{color:'#9F2E3C'}}>Testosterone</b> là hormone sinh dục đặc trưng của nam giới, có vai trò to lớn đến gần như toàn bộ cơ thể, từ hệ sinh dục, hệ thần kinh, hệ tim mạch, hệ cơ xương,...Ở người đàn ông trưởng thành, nồng độ Testosterone trong máu đạt mức ổn định trong khoảng 10-35 nanomol/lit, mức này đảm bảo sức khỏe nền tảng và khả năng tình dục.</p>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>VAI TRÒ CỦA TESTOSTERONE</b></p></h5>
                            <p style={{textAlign:'center'}}><b><i>Vai trò của Testosterone đối với đời sống sinh lý nam:</i></b></p>
                            <p>
                                <ul style={{fontSize:'17px'}}>
                                    <li>Duy trì ham muốn tình dục</li>
                                    <li>Điều khiển quá trình cương dương</li>
                                    <li>Sản xuất tinh trùng</li>
                                </ul>
                            </p>
                            <p style={{textAlign:'center'}}><b><i>Vai trò của Testosterone đối với sức khỏe toàn thân của nam giới:</i></b></p>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src='https://alipas.com.vn/wp-content/uploads/2023/03/vai-tro-cua-testosorone.jpg' alt='img' style={{width:'100%',height:'100%'}}/>
                            </div>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>NGUỒN GỐC TESTOSTERONE</b></p></h5>
                            <p>Để đáp ứng nhu cầu hoạt động của cơ thể nam giới, vùng dưới đồi của não bộ tiết ra hormone hướng sinh dục GnRH, kích thích tuyến yên phóng thích Luteinizing Hormone (LH) vào máu. Hormone này kích thích các tế bào Leydig ở tinh hoàn thực hiện những phản ứng sinh hóa để sản sinh Testosterone.
                                <br/><br/>Testosterone khuếch tán vào máu, đi đến các cơ quan quan trọng của cơ thể như não bộ, gan, thận, tuyến sinh dục, tuyến tiền liệt, hệ cơ xương và quyết định hoạt động của toàn bộ sức khỏe của người đàn ông. Hầu hết Testosterone được sản xuất tại tinh hoàn, chiếm 95%, còn lại do tuyến thượng thận tiết ra (5%)
                            </p>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>HẬU QUẢ CỦA SUY GIẢM NỒNG ĐỘ TESTOSTERONE</b></p></h5>
                            <p>Sau tuổi 30, nồng độ Testosterone trong cơ thể nam giới bắt đầu giảm, mỗi năm giảm 1% – 2%. Tới tuổi 60, lượng Testosterone của cơ thể chỉ còn 50%. Nếu nồng độ Testosterone trong máu thấp hơn mức trung bình, chức năng sinh lý và sức khỏe toàn thân của nam giới sẽ suy giảm.</p>
                            <div class="text-center">
                                <img style={{width:'100%',height:'100%'}} fetchpriority="high" decoding="async" class="alignnone size-full wp-image-13576 img-reponsive " src="https://alipas.com.vn/wp-content/uploads/2023/03/bieu-do-suy-giam.jpg" alt="" width="900" height="595"/>
                            </div>
                            <div class="text-center">
                                <img style={{width:'100%',height:'100%'}} decoding="async" class="alignnone size-full img-reponsive wp-image-13577" src="https://alipas.com.vn/wp-content/uploads/2023/03/trieu-chung-ve-suc-khoe.jpg" alt="" width="1024" height="735"/>
                            </div>
                            <h5 className='py-3' style={{textAlign:'center',marginBottom:'20px'}}><b>NITRIC OXIDE</b></h5>
                            <div style={{width:'5%',height:'2px',backgroundColor:'#9F2E3C',margin:'auto',marginBottom:'20px'}}></div>
                            <h5><p style={{color:'#9F2E3C',textAlign:'center'}}><b>HOẠT ĐỘNG CƯƠNG DƯƠNG <br/>& NITRIC OXIDE</b></p></h5>
                            <p><b style={{color:'#9F2E3C'}}>Nitric Oxide</b> (viết tắt NO), là một hợp chất được sản sinh bởi tế bào nội mạc mạch máu và được sử dụng ở hầu hết ở các mô và cơ quan trọng cơ thể. Nitric Oxide không chỉ đóng vai trò quan trọng trong hệ tim mạch, mà còn có ý nghĩa quyết định đối với hoạt động của hệ Tiết niệu – Sinh dục, cụ thể là trong hoạt động cương dương.</p>
                            <p>Bản chất của cương dương là quá trình máu dồn về các thể hang và thể xốp ở dương vật tạo ra sự cương cứng. Khi nam giới có ham muốn tình dục, trung tâm phó giao cảm tại tủy sống sẽ gửi tín hiệu kích thích tế bào nội mạc mạch máu ở dương vật gia tăng tổng hợp Nitric Oxide. Nồng độ Nitric Oxide tăng lên giúp tế bào cơ trơn ở động mạch giãn ra, đưa máu dồn về dương vật nhanh và nhiều tạo ra cương cứng.</p>
                            <p>Như vậy, dương vật cương có đủ nhanh và mạnh hay không phụ thuộc vào lượng Nitric Oxide được sinh ra tại mạch máu.</p>
                        </Row>
                        <Row className='py-4'>
                            <p style={{textAlign:'center'}} >Copyright © 2014 Alipas</p>
                            <p style={{textAlign:'center'}}>Các thông tin trên website alipas.com.vn chỉ dành cho mục đích tham khảo, tra cứu không thay thế cho việc chẩn đoán hoặc điều trị y khoa. Alipas không chịu trách nhiệm về những trường hợp tự ý áp dụng mà không có chỉ định của bác sĩ.</p>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default ContainerContent