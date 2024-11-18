import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './pages/Navbar/Navbar';
import Tea_Navbar from './teacher/Tea_Navbar/Tea_Navbar';

import Home from './pages/Home/Home';
import News from './pages/News/News';
import Introduce from './pages/Introduce/Introduce';
import Admissions from './pages/Admissions/Admissions';
import TimeTable from './pages/TimeTable/TimeTable';
import ViewNoteti from './pages/ViewNoteti/ViewNoteti';
import ExamSchedule from './pages/ExamSchedule/ExamSchedule';
import Tea_TimeTable from './teacher/Tea_TimeTable/Tea_TimeTable';
import Tea_ExamSchedule from './teacher/Tea_ExamSchedule/Tea_ExamSchedule';
import Tea_ViewNoteti from './teacher/Notetication/Tea_ViewNoteti/Tea_ViewNoteti';
import Tea_CreateNoteti from './teacher/Notetication/Tea_CreateNoteti/Tea_CreateNoteti';


const App = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (!token) {
      setRole(null);
    } else {
      setRole(userRole);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setRole(null);
    navigate('/');
  };

  return (
    <div className='app'>
      <Header setRole={setRole} handleLogout={handleLogout} />

      {role === 'student' ? <Navbar /> : role === 'teacher' ? <Tea_Navbar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/admissions" element={<Admissions />} />

        {/* Các route sinh viên */}
        {role === 'student' && (
          <>
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/viewnoteti" element={<ViewNoteti />} />
            <Route path="/examschedule" element={<ExamSchedule />} />
          </>
        )}

        {/* Các route giảng viên */}
        {role === 'teacher' && (
          <>
            <Route path="/tea_timetable" element={<Tea_TimeTable />} />
            <Route path="/tea_viewnoteti" element={<Tea_ViewNoteti />} />
            <Route path="/tea_createnoteti" element={<Tea_CreateNoteti />} />
            <Route path="/tea_examschedule" element={<Tea_ExamSchedule />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;