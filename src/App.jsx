import React from 'react';
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import TimeTable from './pages/TimeTable/TimeTable';
import ViewNoteti from './pages/ViewNoteti/ViewNoteti';
import ExamSchedule from './pages/ExamSchedule/ExamSchedule';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Tea_Navbar from './teacher/Tea_Navbar/Tea_Navbar';
import Tea_TimeTable from './teacher/Tea_TimeTable/Tea_TimeTable'
import Tea_ExamSchedule from './teacher/Tea_ExamSchedule/Tea_ExamSchedule'
import Tea_ViewNoteti from './teacher/Notetication/Tea_ViewNoteti/Tea_ViewNoteti'
import Tea_CreateNoteti from './teacher/Notetication/Tea_CreateNoteti/Tea_CreateNoteti'
const App = () => {
  return (
    <div className='app'>
      <Header />
      {/* <Navbar /> */}
      <Tea_Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timetable' element={<TimeTable />} />
        <Route path='/viewnoteti' element={<ViewNoteti />} />
        <Route path='/examschedule' element={<ExamSchedule />} />
        <Route path='/tea_timetable' element={<Tea_TimeTable />} />
        <Route path='/tea_viewnoteti' element={<Tea_ViewNoteti />} />
        <Route path='/tea_createnoteti' element={<Tea_CreateNoteti />} />
        <Route path='/tea_examschedule' element={<Tea_ExamSchedule />} />
      </Routes>
    </div>
  )
}

export default App