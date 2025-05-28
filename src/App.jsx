import React from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Register from './pages/Auth/Register';
import Dashboard from './pages/User/Dashboard';
import MyTasks from './pages/User/MyTasks';
import MySchedule from './pages/User/MySchedule';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import Login from './pages/Auth/Login';
import LandingNav from './pages/LandingPage/component/LandingNav';
import Landing from './pages/LandingPage/pages/Landing';
import UserProvider, { UserContext } from './context/userContext';

const App = () => {
//   const UserLayout = () => {
//     return (
//       <>
//         <LandingNav />
//         <Outlet />{}
//       </>
//     );
// };
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/' element={<Landing />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/mytasks' element={<MyTasks />}/>
            <Route path='/myschedule' element={<MySchedule />}/>
            <Route path='/task-details/:id' element={<ViewTaskDetails />}/>
          </Routes>
        </Router>
      </div>
    </UserProvider>
    
  )
}

export default App