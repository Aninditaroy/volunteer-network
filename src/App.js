
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './../src/components/Shared/Header/Header';
import Home from './../src/components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';
import VolunteerDetail from './components/VolunteerDetail/VolunteerDetail';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Events from './components/Events/Events/Events';
import AddEvent from './components/Events/AddEvent/AddEvent';
import Admin from './components/Admin/Admin';
import VolunteerList from './components/VolunteerList/VolunteerList/VolunteerList';
import AddVolunteer from './components/AddVolunteer/AddVolunteer';
import AddVolunteerList from './components/VolunteerList/AddVolunteerList/AddVolunteerList';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/volunteers' element={<Volunteers/>}></Route>
        <Route path='/volunteers/:volunteerId' element={<VolunteerDetail/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/admin' element={
          <RequireAuth>
            <Admin/>
          </RequireAuth>
        }></Route>
        <Route path='/addevent' element={
          <RequireAuth>
            <AddEvent/>
          </RequireAuth>
        }></Route>
        <Route path='/volunteerlist' element={
          <RequireAuth>
            <VolunteerList/>
          </RequireAuth>
        }></Route>
        <Route path='/addvolunteer' element={
          <RequireAuth>
             <AddVolunteer/>
          </RequireAuth>
        }></Route>
        <Route path='/addvolunteerlist' element={
          <RequireAuth>
             <AddVolunteerList/>
          </RequireAuth>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
