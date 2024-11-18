import React, { useState } from 'react';
import './Tea_CreateNoteti.scss';

const Tea_CreateNoteti = () => {
    const [subjectTaught, setSubjectTaught] = useState('');
    const [classTaught, setClassTaught] = useState('');
    const [subjectID, setSubjectID] = useState('');
    const [subject, setSubject] = useState('');
    const [room, setRoom] = useState('');
    const [week, setWeek] = useState('');
    const [dayofweek, setDayofweek] = useState('');
    const [classperiod, setClassperiod] = useState('');
    const [note, setNote] = useState('');

    // State để lưu danh sách các thông báo đã tạo
    const [notifications, setNotifications] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Tạo đối tượng thông báo mới từ các giá trị nhập vào
        const newNotification = {
            subjectTaught,
            classTaught,
            subjectID,
            subject,
            room,
            week,
            dayofweek,
            classperiod,
            note
        };

        // Cập nhật danh sách thông báo
        setNotifications([...notifications, newNotification]);

        // Reset form sau khi submit
        setSubjectTaught('');
        setClassTaught('');
        setSubjectID('');
        setSubject('');
        setRoom('');
        setWeek('');
        setDayofweek('');
        setClassperiod('');
        setNote('');
    };

    return (
        <div className="CreateNotification">
            <h1>TẠO THÔNG BÁO NGHỈ</h1>
            <form onSubmit={handleSubmit}>
                <div className="Dropdownlist">
                    <div className="form-group">
                        <label htmlFor="subjectTaught">Môn dạy :</label>
                        <select
                            id="subjectTaught"
                            value={subjectTaught}
                            onChange={(e) => setSubjectTaught(e.target.value)}
                            required
                        >
                            <option value="">Chọn môn</option>
                            <option value="Môn A">Môn A</option>
                            <option value="Môn B">Môn B</option>
                            <option value="Môn C">Môn C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="classTaught">Lớp dạy :</label>
                        <select
                            id="classTaught"
                            value={classTaught}
                            onChange={(e) => setClassTaught(e.target.value)}
                            required
                        >
                            <option value="">Chọn lớp</option>
                            <option value="Lớp 46K14">Lớp 46K14</option>
                            <option value="Lớp 46K21">Lớp 46K21</option>
                            <option value="Lớp 46K21.1">Lớp 46K21.1</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subjectID">Mã môn học:</label>
                    <input
                        type="text"
                        id="subjectID"
                        value={subjectID}
                        onChange={(e) => setSubjectID(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Tên môn học:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="room">Phòng:</label>
                    <input
                        type="text"
                        id="room"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="week">Tuần:</label>
                    <input
                        type="text"
                        id="week"
                        value={week}
                        onChange={(e) => setWeek(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dayofweek">Thứ:</label>
                    <input
                        type="text"
                        id="dayofweek"
                        value={dayofweek}
                        onChange={(e) => setDayofweek(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="classperiod">Tiết học:</label>
                    <input
                        type="text"
                        id="classperiod"
                        value={classperiod}
                        onChange={(e) => setClassperiod(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="note">Ghi chú:</label>
                    <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows="4"
                        cols="50"
                        required
                    />
                </div>
                <button className="btn_submit" type="submit">Thêm mới</button>
            </form>

            <h2>DANH SÁCH THÔNG BÁO</h2>
            <div className="notification-list">
                {notifications.map((notif, index) => (
                    <div className="notification-item" key={index}>
                        <h3>Thông báo nghỉ {index + 1}</h3>
                        <div><strong>Môn dạy:</strong> {notif.subjectTaught}</div>
                        <div><strong>Lớp dạy:</strong> {notif.classTaught}</div>
                        <div><strong>Mã môn học:</strong> {notif.subjectID}</div>
                        <div><strong>Tên môn học:</strong> {notif.subject}</div>
                        <div><strong>Phòng:</strong> {notif.room}</div>
                        <div><strong>Tuần:</strong> {notif.week}</div>
                        <div><strong>Thứ:</strong> {notif.dayofweek}</div>
                        <div><strong>Tiết học:</strong> {notif.classperiod}</div>
                        <div><strong>Ghi chú:</strong> {notif.note}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tea_CreateNoteti;
