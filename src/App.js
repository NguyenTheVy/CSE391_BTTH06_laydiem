import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import Home from './web/home';
import New from './web/new';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="container">
          <div className=" d-flex p-2">
            <div className="d-flex">
              <div className="logo w-25">
                <img src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" className="w-100"
                  alt="" />
              </div>

              <div className="py-4 mx-5">
                <strong>
                  ĐẠI HỌC BÁCH KHOA HÀ NỘI<br />
                  TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                </strong>
              </div>
            </div>

            <form className="position-relative d-flex align-items-center w-50 ">
              <div className="">
                <div className="d-flex justify-content-center ">
                  <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" className='mx-1' alt="" />
                  <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" className='mx-1' alt="" />
                </div>
                <input className="form-control me-2 rounded-pill h-25 my-1" type="text" placeholder="Search" />
              </div>

              <div className="position-absolute end-0 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </form>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark border-red">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  d-flex justify-content-center" id="collapsibleNavbar" >
              <ul className="navbar-nav">
                <li className="nav-item dropdown border-start border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Giới thiệu</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><Link className="dropdown-item text-white" to=''>Thông tin chung</Link></li>
                    <li><Link className="dropdown-item text-white" to='new'>Triết lý giáo dục</Link></li>
                    <li><a className="dropdown-item text-white" href="#">Cơ cấu tổ chức</a></li>
                    <li><a className="dropdown-item text-white" href="#">Đảng ủy - hội đồng trường</a></li>
                    <li><a className="dropdown-item text-white" href="#">Ban lãnh đạo trường</a></li>
                    <li><a className="dropdown-item text-white" href="#">Các tổ chức đoàn trường</a></li>
                    <li><a className="dropdown-item text-white" href="#">Danh sách cán bộ</a></li>
                    <li><a className="dropdown-item text-white" href="#">Văn phòng trường</a></li>


                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Khoa-Trung tâm</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Khoa</a></li>
                    <li><a className="dropdown-item text-white" href="#">Khoa học máy tính</a></li>
                    <li><a className="dropdown-item text-white" href="#">Kỹ thuật máy tính</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Đào tạo</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hệ đại học</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hệ thạc sỹ</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hệ tiến sỹ</a></li>
                    <li><a className="dropdown-item text-white" href="#">Đào tạo chứng chỉ</a></li>

                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Nghiên cứu</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item text-white" href="#">Các phòng thí nghiệm</a></li>
                    <li><a className="dropdown-item text-white" href="#">Các đề tài - Dự án</a></li>
                    <li><a className="dropdown-item text-white" href="#">Công bố khoa học</a></li>
                    <li><a className="dropdown-item text-white" href="#">Tìm chuyên gia?</a></li>

                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Tuyển sinh</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">kiến tạo tương lai với soICT</a></li>
                    <li><a className="dropdown-item text-white" href="#">Tuyển sinh 2022</a></li>
                    <li><a className="dropdown-item text-white" href="#">Điểm chuẩn tham khảo</a></li>
                    <li><a className="dropdown-item text-white" href="#">Đào tạo ngắn hạn</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hỏi đáp tuyển sinh</a></li>

                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Sinh viên</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Biểu mẫu và quy định dành cho sinh viên</a></li>
                    <li><a className="dropdown-item text-white" href="#">Cố vấn học tập</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hoạt động sinh viên nghiên cứu khoa học</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Hợp tác đối ngoại</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hợp tác với khối Hàn Lâm</a></li>
                    <li><a className="dropdown-item text-white" href="#">Hợp tác với khối doanh nghiệp</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Cựu sinh viên</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item text-white" href="#">Tấm gương cựu sinh viên</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Tin tức sự kiện</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Tin tức</a></li>
                    <li><a className="dropdown-item text-white" href="#">Tin bài</a></li>
                    <li><a className="dropdown-item text-white" href="#">Thông báo</a></li>
                    <li><a className="dropdown-item text-white" href="#">SoICT talks</a></li>

                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Tuyển dụng</a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-white" href="#">Việc làm tại soICT</a></li>
                    <li><a className="dropdown-item text-white" href="#">Việc làm cho sinh viên</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='new' element={<New />} />
        </Routes>

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <h6 className='border-bottom py-3 text-white'>KHOA – TRUNG TÂM</h6>
                <div className="footer-links">
                  <li><a href="">Khoa học Máy tính</a></li>
                  <li><a href="">Kỹ thuật Máy tính</a></li>
                  <li><a href="">Trung tâm Cyber Security</a></li>
                  <li><a href="">Trung tâm Đổi mới Sáng tạo</a></li>
                  <li><a href="">Trung tâm Máy tính và Thực hành</a></li>
                  <li><a href="">Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo</a></li>
                  <li><a href="">Văn Phòng Trường</a></li>


                </div>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6 className='border-bottom py-3 text-white'>CHƯƠNG TRÌNH ĐÀO TẠO</h6>
                <div className="footer-links">
                  <li><a href="">Chương trình Việt Nhật (HEDSPI)</a></li>
                  <li><a href="">Chương trình Global ICT</a></li>
                  <li><a href="">Chương trình Khoa học dữ liệu và trí tuệ nhân tạo</a></li>
                  <li><a href="">Chương trình Thạc sỹ Chuyển đổi số</a></li>
                  <li><a href="">Các chương trình đại học</a></li>
                  <li><a href="">Các chương trình thạc sỹ</a></li>
                  <li><a href="">Các chương trình tiến sỹ</a></li>
                  <li><a href="">Các chương trình đào tạo ngắn hạn</a></li>

                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6 className='border-bottom py-3 text-white'>HỆ THỐNG VÀ TÀI NGUYÊN
                </h6>
                <div className="footer-links">
                  <li><a href="">Hệ thống Quản lý Đào tạo</a></li>
                  <li><a href="">Hệ thống Quản lý Hợp tác Doanh nghiệp</a></li>
                  <li><a href="">Các mẫu biểu dành cho sinh viên Viện</a></li>
                </div>
              </div>

              <div className="col-xs-6 col-md-3 ">
                <div className="p-4">
                  <img className="w-100" src="https://soict.hust.edu.vn/wp-content/uploads/2019/04/soict-light-logo-300x66.png" alt="" />
                </div>
                <div className="footer-links">
                  <li><a href="/"> (+84) 24 3869 2463</a></li>
                  <li><a href="ct/">vp@soict.hust.edu.vn</a></li>
                  <p className='text-white'>P. 505 – Nhà B1 – Đại học Bách khoa Hà Nội</p>
                  <p className='text-white'>Số 1 Đại Cồ Việt – Hai Bà Trưng – Hà Nội</p>
                  <div className="col-md-4 col-sm-6 col-xs-12">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <strong>Copyright © Trường Công nghệ Thông tin và Truyền thông</strong>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <span className='position-fixed bottom-0 end-0 btn px-3 py-2 m-3  bg-black text-white'><i className="ti-angle-up"></i></span>
    </React.Fragment>
  );
}

export default App;
