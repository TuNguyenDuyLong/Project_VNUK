import React, { useState, useEffect } from 'react';
import './TimeTable.scss';

const TimeTable = () => {
    const [semesters, setSemesters] = useState([]);
    const [selectedSemester, setSelectedSemester] = useState('');
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Dữ liệu mock
        const mockSemesters = [
            { semestersID: '1', semestersName: 'Kỳ 1 - 24 - 25' },
            { semestersID: '2', semestersName: 'Kỳ 2 - 24 - 25' },
        ];
        setSemesters(mockSemesters);
    }, []);

    const handleFilterChange = () => {
        if (!selectedSemester) {
            setTableData([]);
            return;
        }
        // Gọi API để lấy dữ liệu thời khóa biểu (nếu có)
        fetch(`${process.env.REACT_APP_API_BASE_URL}/api/timetable?semester=${selectedSemester}`)
            .then(response => response.json())
            .then(data => {
                setTableData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setTableData([]); // Nếu có lỗi, không hiển thị dữ liệu
            });
    };

    return (
        <div className="timetable-container">
            <h2 className="timetable-title">TRA CỨU THỜI KHÓA BIỂU</h2>

            <div className="filter-container">
                <select value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)}>
                    {semesters.map(semester => (
                        <option key={semester.semestersID} value={semester.semestersID}>
                            {semester.semestersName}
                        </option>
                    ))}
                </select>
                <button onClick={handleFilterChange}>Tra cứu</button>
            </div>

            {tableData.length > 0 ? (
                <table className="result-table">
                    <thead>
                        <tr>
                            <th>Thứ</th>
                            <th>Tên học phần</th>
                            <th>Tên giảng viên</th>
                            <th>Lớp tín chỉ</th>
                            <th>Tín chỉ</th>
                            <th>Phòng</th>
                            <th>Tiết</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.day}</td>
                                <td>{row.subject}</td>
                                <td>{row.lecturer}</td>
                                <td>{row.class}</td>
                                <td>{row.credits}</td>
                                <td>{row.room}</td>
                                <td>{row.period}</td>
                                <td>{row.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            ) : (
                <table className="result-table">
                    <thead>
                        <tr>
                            <th>Thứ</th>
                            <th>Tên học phần</th>
                            <th>Tên giảng viên</th>
                            <th>Lớp tín chỉ</th>
                            <th>Tín chỉ</th>
                            <th>Phòng</th>
                            <th>Tiết</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="Null_value">
                            <td colSpan="8" style={{ textAlign: 'center' }}>
                                Không có dữ liệu nào được tìm thấy
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TimeTable;
