
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './../src/components/Shared/Header/Header';
import Home from './../src/components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/volunteers' element={<Volunteers/>}></Route>
      </Routes>
    </>
  );
}

export default App;
