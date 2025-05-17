import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/Auth/Register';
import Dashboard from './pages/User/Dashboard';
import MyTasks from './pages/User/MyTasks';
import MySchedule from './pages/User/MySchedule';
import ViewTaskDetails from './pages/User/ViewTaskDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/mytasks' element={<MyTasks />}/>
          <Route path='/myschedule' element={<MySchedule />}/>
          <Route path='/task-details/:id' element={<ViewTaskDetails />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App