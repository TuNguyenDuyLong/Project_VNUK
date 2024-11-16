import React, { useState, useEffect } from 'react';
import './Tea_ViewNoteti.scss';
import { Link, NavLink } from 'react-router-dom';

const Tea_ViewNoteti = () => {
    const [notifications, setNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // Sử dụng biến môi trường REACT_APP_API_BASE_URL
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/notifications`);
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, []);

    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
    };

    return (
        <div className="grid">
            <div className="Notetication">
                <div className="grid__column-2-3">
                    <div className="View_Notetication">
                        <h1 className='Noteti_title'>NOTIFICATION</h1>
                        <div className="Noteti_Content">
                            {notifications.length > 0 ? (
                                <ul className="notification-list">
                                    {notifications.map((notification, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleNotificationClick(notification)}
                                            className="notification-item"
                                        >
                                            <h3>{notification.title}</h3>
                                            <p>{notification.content.substring(0, 50)}...</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Loading notifications...</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid__column-1-3">
                    <div className="Menu_Notetication">
                        <h1 className='Notetie_title_menu'>THÔNG BÁO DÀNH CHO GIẢNG VIÊN</h1>
                        <div className="menu_table">
                            <a href="#">Lịch giảng dạy</a>
                            <a href="#">Lịch coi thi và chấm thi</a>
                            <a href="#">Hội thảo, tập huấn và buổi họp</a>
                            <a href="#">Nghiên cứu và học bổng</a>
                            <a href="#">Thủ tục hành chính</a>
                            <a href="#">Chính sách và quy định mới</a>
                            <a href="#">Biểu mẫu</a>
                        </div>
                    </div>
                    <div className="Menu_Manage_Notetication">
                        <h1 className='Notetie_title_menu'>QUẢN LÝ THÔNG BÁO GIẢNG VIÊN</h1>
                        <div className="menu_table">
                            <Link to="/tea_createnoteti">Tạo thông báo nghỉ - bù</Link>
                            <Link to="/tea_createnoteti_lession">Tạo thông báo môn học</Link>
                            <a href="#">Xem thông báo đã tạo</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hiển thị chi tiết thông báo nếu đã chọn */}
            {selectedNotification && (
                <div className="NotificationDetail">
                    <h2>{selectedNotification.title}</h2>
                    <p>{selectedNotification.content}</p>
                </div>
            )}
        </div>
    );
}

export default Tea_ViewNoteti;
