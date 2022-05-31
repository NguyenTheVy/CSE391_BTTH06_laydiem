import React from "react";
function Home() {
    return (
        <React.Fragment>
            <div id="demo" className="carousel slide" data-bs-ride="carousel" >


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" style={{ height: "5px", width: '4.5%' }} data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" style={{ height: "5px", width: '4.5%' }} data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" style={{ height: "5px", width: '4.5%' }} data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" style={{ height: "5px", width: '4.5%' }} data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/Slide-show-website-2.png" alt="Los Angeles" id="img" className="d-block " style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/t-1.jpg" alt="Chicago" id="img" className="d-block" style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" alt="New York" id="img" className="d-block" style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/%E1%BA%A2nh-chung.jpg" alt="New York" id="img" className="d-block" style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="text-center my-5 fs-3">
                <strong>TIN MỚI NHẤT</strong>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/BKAI-NAVER-Challenge-2022-02.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</strong>
                        </div>
                        <div className="content">
                            <span>
                                BKAI-NAVER Challenge 2022 là hoạt động thuộc dự án hợp tác nghiên cứu AI giữa Trung tâm BKAI, Trường CNTT&TT và Tập...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/05-Hoi-truong.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE IDEA CHALLENGE 2022</strong>
                        </div>
                        <div className="content">
                            <span>
                                Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động, trải nghiệm thú vị, bao gồm: Tọa...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</strong>
                        </div>
                        <div className="content">
                            <span>
                                Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/DAT01879.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG – NHIỆM KỲ 2022-2024</strong>
                        </div>
                        <div className="content">
                            <span>
                                ️Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="color-red p-1 text-center mt-5 ">
                <span className="text-white">Xem thêm tin tức</span>
            </div>
            <div className="position-relative d-flex justify-content-center" style={{ height: '550px' }}>
                <div className="w-100">
                    <img src="https://mona.media/wp-content/uploads/2021/06/banner-giay.png" id="img" alt="" style={{ width: '100%', height: '550px' }} />
                </div>
                <div className="position-absolute">
                    <div className=" top-0 my-4 fs-3 text-center p-4">
                        <strong className="text-white">Sự kiện mới nhất</strong>
                    </div>
                    <div className="row row-cols-4 px-5">
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Khai-Truong-EdTech.jpg" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">
                                        Lễ ra mắt  “Trung tâm Công nghệ và Giải pháp Chuyển đổi số trong Giáo dục”  hợp tác giữa Trường Đại học Bách khoa Hà Nội và Công ty Sun*                                                     </strong>
                                </div>
                                <div className="content">
                                    <span className="">

                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">04</strong>
                                <br />
                                <strong className="text-white">TH03</strong>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/INNOVATION-DAY-2022.png" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">
                                        INNOVATION DAY 2022                            </strong>
                                </div>
                                <div className="content">
                                    <span className="">

                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">04</strong>
                                <br />
                                <strong className="text-white">TH03</strong>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/STUDENT-CREATIVE-IDEAS-CHALLENGE-2022.jpg" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">
                                        CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022                             </strong>
                                </div>
                                <div className="content">
                                    <span className="">

                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">04</strong>
                                <br />
                                <strong className="text-white">TH03</strong>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/IMG_1651507570048_1651507626090-5.jpg" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">                                HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG LAI TRONG KHOA HỌC DỮ LIỆU VÀ TRÍ TUỆ NHÂN TẠO                            </strong>
                                </div>
                                <div className="content">
                                    <span className="">

                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">04</strong>
                                <br />
                                <strong className="text-white">TH03</strong>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="color-red p-1 text-center">
                <span className="text-white">Xem thêm sự kiện</span>
            </div>
            <div className="container text-center p-5">
                <strong className="fs-4">ĐÀO TẠO – TUYỂN SINH</strong>
                <p className="p-4">
                    <span >
                        Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh
                        vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.
                    </span>
                </p>
            </div>

            <div className="container">
                <div className="d-flex">
                    <div className="row Small shadow mx-2  p-3">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg" alt="" height="300px" className="col-6" />
                        <div className="content col-6">
                            <strong>
                                CHƯƠNG TRÌNH ĐÀO TẠO
                            </strong>
                            <p>
                                Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó,
                                có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài.
                                Các chương trình đào tạo thuộc vào 3 nhóm ngành chính(xem tiếp)
                            </p>
                        </div>
                    </div>
                    <div className="row Small shadow mx-2  p-3">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg" alt="" height="300px" className="col-6" />
                        <div className="content col-6">
                            <strong>
                                KIẾN TẠO TƯƠNG LAI VỚI SoICT
                            </strong>
                            <p>
                                Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà… (xem tiếp)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative d-flex justify-content-center mt-5" style={{ height: '500px' }}>
                <div className="w-100 ">
                    <img src="https://mona.media/wp-content/uploads/2021/06/banner-giay.png" id="img" className="h-100" alt="" style={{ width: '100%' }} />
                </div>
                <div className="position-absolute py-5">
                    <div className="text-center">
                        <h2><small className="text-white">HỢP TÁC ĐỐI NGOẠI</small></h2>
                        <p className="text-white py-2">Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp
                            tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.</p>
                    </div>
                    <div className="d-flex px-5 py-2">
                        <div className="d-flex  Small shadow mx-2">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" alt="" height="100%" className="w-50" />
                            <div className="content bg-white w-50  p-3" >
                                <strong>
                                    CÁC TRƯỜNG ĐỐI TÁC
                                </strong>
                                <p>
                                    Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên Thế giới. Thông qua hợp tác, sinh viên của Trường có cơ hội học tập, nghiên cứu tại các trường đối tác thông qua các học bổng trao đổi sinh viên, cũng như các dự án hợp tác nghiên cứu. Trường hợp tác với các đại học lớn ở Châu Âu, Nhật Bản… để cung cấp cho sinh viên các chương trình đào tạo song bằng (double degree), một hình thức “du học” kinh tế và hiệu quả… (xem tiếp)
                                </p>
                            </div>
                        </div>
                        <div className="d-flex Small shadow mx-2">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/DJI_0030-fixed2-mini-20190727T100030844048.jpg" alt="" height="100%" className="w-50" />
                            <div className="content bg-white w-50  p-3">
                                <strong>
                                    DOANH NGHIỆP ĐỐI TÁC
                                </strong>
                                <p>
                                    Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp. Trường hiện đang duy trì hợp tác với mạng lưới gồm hơn 130 doanh nghiệp CNTT trong và ngoài nước, trong đó có thể kể tới HEDSPI Supporting Partner Network (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng cường ngoại ngữ, phát triển kỹ năng mềm, cũng như làm quen với văn hóa DN để gia tăng sức cạnh tranh trong thị trường lao động quốc tế… (xem tiếp)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center my-5 fs-3">
                <strong>CỰU SINH VIÊN</strong>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">Hoàng Việt Anh – Chỉ có một tình yêu duy nhất</strong>
                        </div>
                        <div className="content">
                            <span>
                            Gia nhập FPT năm 1993, từ khi còn là sinh viên năm 3 khoa CNTT ĐH Bách...					
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Lu-Thanh-Long.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">Lữ Thành Long – Thủ lĩnh công nghệ</strong>
                        </div>
                        <div className="content">
                            <span>
                            Nhắc đến ngôi trường đã gắn bó suốt 5 năm học đại học, doanh nhân Lữ Thành...					
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu--400x267.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">Nguyễn Hà Đông – Cha đẻ Flappy Bird “náo loạn” Thế giới</strong>
                        </div>
                        <div className="content">
                            <span>
                            Tạp chí công nghệ Cnet của Mỹ công bố danh sách 25 ứng dụng có ảnh hưởng...					
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/hungtran-400x250.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5 ">Hùng Trần – Tấm gương khởi nghiệp người Việt tại Silicon Valley</strong>
                        </div>
                        <div className="content">
                            <span>
                            “Gãi đúng chỗ ngứa” của người dùng Trần Việt Hùng là cựu nghiên cứu sinh Quỹ Giáo...					
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 color-nau p-5 ">
                <h3 className="text-center text-white">NÓI VỀ SoICT</h3>
                <div className="item d-flex container px-5 mt-5 ">
                    <div className="px-4 ">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/President_Mr.-Kim-In-Soo-150x250.jpg" alt="" className="rounded-pill " />
                    </div>
                    <div className="content text-white px-4 border-start border-3" id="style-3">
                        <span >
                            Nếu bạn muốn có một thời sinh viên nhàn nhã thì đừng bao giờ nghĩ
                            tới SoICT! Bạn sẽ phải học hành cực kỳ chăm chỉ, phải hy sinh nhiều sở thích cá nhân,
                            phải thức đêm để hoàn thành các khoá học và các project từ chương trình đào tạo rất nặng.
                            Tuy nhiên khi bạn vượt qua được chặng đường đầy gian nan này, bạn có cơ hội tham gia vào mạng
                            lưới cựu sinh viên đã tạo ra danh tiếng cho SoICT không chỉ ở Việt nam như các giáo sư ở đại học danh tiếng Mỹ,
                            các nhà khoa học ở NASA, các kỹ sư phần mềm ở những tập đoàn công nghệ khổng lồ, các doanh nhân
                        </span>
                    </div>
                </div>
                <div className="text-white p-5">
                    <strong>
                        TS. Trần Việt Hùng – Nhà sáng lập GotIT (Silicon Valley)
                    </strong>
                    <br />
                    Cựu Sinh viên K42
                </div>
            </div>
            <div className="text-center my-5 fs-3">
                <strong>VỀ CHÚNG TÔI</strong>
            </div>
            <div className="container">
                <div className="row row-cols-5">
                    <div className="col text-center">
                        <p> <span className="fs-4">QS ranking 2022</span></p>
                        <p>  <strong className="fs-3">401 – 450</strong></p>
                        <span>trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">Sinh viên thuộc TOP</span></p>
                        <p>  <strong className="fs-3">1%</strong></p>
                        <span>điểm cao nhất Khối A Toàn quốc mùa Tuyển sinh 2019</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">Sinh viên</span></p>
                        <p>  <strong className="fs-3">4.000+</strong></p>
                        
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">Chương trình đào tạo</span></p>
                        <p>  <strong className="fs-3">17+</strong></p>
                        <span>thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">Đối tác</span></p>
                        <p>  <strong className="fs-3">200+</strong></p>
                        <span>các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế</span>
                    </div>
                </div>
            </div>
            <div className="color-red text-center mt-5 p-1">
                <span className="text-white">Xem thêm</span>
            </div>
        </React.Fragment>
    )
}
export default Home