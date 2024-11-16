import React, { useState, useEffect } from 'react';
import './TimeTable.scss';

const TimeTable = () => {
    // const [years, setYears] = useState([]);
    const [semesters, setSemesters] = useState([]);
    // const [weeks, setWeeks] = useState([]);
    // const [selectedYear, setSelectedYear] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    // const [selectedWeek, setSelectedWeek] = useState('');
    const [tableData, setTableData] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch dữ liệu cho các bộ lọc từ backend
        // fetch('/api/years')
        //     .then(response => response.json())
        //     .then(data => setYears(data));

        fetch('/api/semesters')
            .then(response => response.json())
            .then(data => setSemesters(data));

        // fetch('/api/weeks')
        //     .then(response => response.json())
        //     .then(data => setWeeks(data));
    }, []);

    const handleFilterChange = () => {
        // Fetch dữ liệu thời khóa biểu dựa trên các bộ lọc đã chọn và mã sinh viên
        fetch(`/api/timetable?semester=${selectedSemester}`)
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className="timetable-container">
            <h2 className="timetable-title">TRA CỨU THỜI KHÓA BIỂU</h2>

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
                {/* <select value={selectedWeek} onChange={e => setSelectedWeek(e.target.value)}>
                    <option value="">Chọn tuần</option>
                    {weeks.map(week => (
                        <option key={week.id} value={week.id}>{week.name}</option>
                    ))}
                </select> */}
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
                // Trường hợp không có dữ liệu
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
                        <tr className='Null_value'>
                            <td colSpan="8" style={{ textAlign: 'center' }}>Không có dữ liệu nào được tìm thấy</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TimeTable;

