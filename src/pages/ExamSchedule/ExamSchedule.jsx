import React, { useState, useEffect } from 'react';
import './ExamSchedule.scss';

const ExamSchedule = () => {
    // const [years, setYears] = useState([]);
    const [semesters, setSemesters] = useState([]);
    // const [selectedYear, setSelectedYear] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [examData, setExamData] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch dữ liệu cho các bộ lọc từ backend
        fetch('/api/semesters')
            .then(response => response.json())
            .then(data => setSemesters(data));
    }, []);

    const handleFilterChange = () => {
        // Fetch dữ liệu lịch thi dựa trên các bộ lọc đã chọn và mã sinh viên
        fetch(`/api/examschedule?semester=${selectedSemester}`)
            .then(response => response.json())
            .then(data => setExamData(data))
            .catch(error => console.error('Error fetching exam schedule data:', error));
    };

    return (
        <div className="exam-schedule-container">
            <h2 className="exam-schedule-title">TRA CỨU LỊCH THI</h2>

            <div className="filter-container">
                {/* <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Mã sinh viên"
                    className="search-input"
                /> */}
                {/* <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
                    <option value="">Chọn năm học</option>
                    {years.map(year => (
                        <option key={year.id} value={year.id}>{year.name}</option>
                    ))}
                </select> */}
                <select value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)}>
                    <option value="">Chọn học kỳ</option>
                    {semesters.map(semester => (
                        <option key={semester.id} value={semester.id}>{semester.name}</option>
                    ))}
                </select>

                <button onClick={handleFilterChange}>Tra cứu</button>
            </div>

            {examData.length > 0 ? (
                <table className="result-table">
                    <thead>
                        <tr>
                            <th>Ngày</th>
                            <th>Mã học phần</th>
                            <th>Tên học phần</th>
                            <th>Hình thức thi</th>
                            <th>Phòng</th>
                            <th>Giờ thi</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.examDate}</td>
                                <td>{row.courseCode}</td>
                                <td>{row.courseName}</td>
                                <td>{row.examType}</td>
                                <td>{row.examRoom}</td>
                                <td>{row.examTime}</td>
                                <td>{row.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <table className="result-table">
                    <thead>
                        <tr>
                            <th>Ngày</th>
                            <th>Mã học phần</th>
                            <th>Tên học phần</th>
                            <th>Hình thức thi</th>
                            <th>Phòng thi</th>
                            <th>Giờ thi</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Null_value'>
                            <td colSpan="7" style={{ textAlign: 'center' }}>Không có dữ liệu nào được tìm thấy</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ExamSchedule;
