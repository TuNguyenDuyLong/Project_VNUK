import React, { useState, useEffect } from 'react';
import './Tea_TimeTable.scss';

const Tea_TimeTable = () => {
    const [semesters, setSemesters] = useState([]);
    const [selectedSemester, setSelectedSemester] = useState('');
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const mockSemesters = [
            { semestersID: '1', semestersName: 'Kỳ 1 - 24 - 25' },
            { semestersID: '2', semestersName: 'Kỳ 2 - 24 - 25' },
        ];
        setSemesters(mockSemesters);
    }, []);
    // Có API thì thay vào đây hử
    // useEffect(() => {
    //     // Gửi yêu cầu đến backend để lấy danh sách học kỳ
    //     fetch(`${process.env.REACT_APP_API_BASE_URL}/api/semesters`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setSemesters(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching semesters data:', error);
    //         });
    // }, []);

    const handleFilterChange = () => {
        if (!selectedSemester) {
            setTableData([]);
            return;
        }
        fetch(`${process.env.REACT_APP_API_BASE_URL}/api/timetable?semester=${selectedSemester}`)
            .then(response => response.json())
            .then(data => {
                setTableData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setTableData([]);
            });
    };

    return (
        <div className="timetable-container">
            <h2 className="timetable-title">TRA CỨU THỜI KHÓA BIỂU</h2>

            <div className="filter-container">
                <select
                    value={selectedSemester}
                    onChange={e => setSelectedSemester(e.target.value)}
                >
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
                            <th>Tín chỉ</th>
                            <th>Lớp tín chỉ</th>
                            <th>Tuần bắt đầu</th>
                            <th>Tuần kết thúc</th>
                            <th>Phòng</th>
                            <th>Tiết</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.dayOfWeekName}</td>
                                <td>{row.courseClassName}</td>
                                <td>{row.numberOfCredits}</td>
                                <td>{row.courseClassID}</td>
                                <td>{row.weekStart}</td>
                                <td>{row.weekEnd}</td>
                                <td>{row.roomName}</td>
                                <td>{row.classPeriodName}</td>
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
                            <th>Tín chỉ</th>
                            <th>Lớp tín chỉ</th>
                            <th>Tuần bắt đầu</th>
                            <th>Tuần kết thúc</th>
                            <th>Phòng</th>
                            <th>Tiết</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="Null_value">
                            <td colSpan="9" style={{ textAlign: 'center' }}>
                                Không có dữ liệu nào được tìm thấy
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Tea_TimeTable;
