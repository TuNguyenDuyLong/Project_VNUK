import React, { useState } from 'react';
import './Tea_CreateNoteti.scss';

const Tea_CreateNoteti = () => {
    const [address, setAddress] = useState('');
    const [subjectID, setSubjectID] = useState('');
    const [subject, setSubject] = useState('');
    const [room, setRoom] = useState('');
    const [week, setWeek] = useState('');
    const [dayofweek, setDayofweek] = useState('');
    const [classperiod, setClassperiod] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="CreateNotification">
            <h1>TẠO THÔNG BÁO NGHỈ</h1>
            <form onSubmit={handleSubmit}>
                <div className="Dropdownlist">

                    <div className="form-group">
                        <label htmlFor="address">Môn dạy :</label>
                        <select
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        >
                            <option value="">Chọn môn</option>
                            <option value="">Môn A</option>
                            <option value="">Môn B</option>
                            <option value="">Môn C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Lớp dạy :</label>
                        <select
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        >
                            <option value="">Chọn lớp</option>
                            <option value="">Lớp 46K14</option>
                            <option value="">Lớp 46K21.</option>
                            <option value="">Lớp 46K21.1</option>
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
                    <label htmlFor="content">Tên môn học:</label>
                    <input
                        type="text"
                        id="content"
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
                    <input
                        type="text"
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        required
                    />
                </div>
                <button className='btn_submit' type="submit">Thêm mới</button>
            </form>
        </div>
    );
};

export default Tea_CreateNoteti;
