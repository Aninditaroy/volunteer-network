
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './../src/components/Shared/Header/Header';
import Home from './../src/components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';
import VolunteerDetail from './components/VolunteerDetail/VolunteerDetail';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/volunteers' element={<Volunteers/>}></Route>
        <Route path='/volunteers/:volunteerId' element={<VolunteerDetail/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
