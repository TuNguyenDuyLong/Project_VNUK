import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.png';
import User from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className='header'>
            <div className="header_top">
                <div className="header_title">
                    <div className="header_logo">
                        <img src={Logo} alt="" className="header_logo" />
                    </div>
                    <div className="header_name">
                        <h3 className='first-name'>ĐẠI HỌC ĐÀ NẴNG</h3>
                        <h3 className='last-name'>VIỆN NGHIÊN CỨU ĐÀO TẠO VIỆT - ANH</h3>
                    </div>
                </div>
                <div className="header_user">
                    <div className="header_user-avatar">
                        <img src={User} alt="" className="avatar" />
                    </div>
                    <div>
                        <button className='header_login'>ĐĂNG NHẬP</button>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="header_menu">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "header-link active" : "header-link")}>TRANG CHỦ</NavLink>
                    <NavLink to="/introduce" className={({ isActive }) => (isActive ? "header-link active" : "header-link")}>GIỚI THIỆU</NavLink>
                    <NavLink to="/news" className={({ isActive }) => (isActive ? "header-link active" : "header-link")}>TIN TỨC</NavLink>
                    <NavLink to="/enrollment" className={({ isActive }) => (isActive ? "header-link active" : "header-link")}>TUYỂN SINH</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
