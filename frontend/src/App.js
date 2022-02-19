/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Login from './Auth/Ulogin';
import Signup from './Auth/signup';
import Home_m from './PM/home_m';
import Project_m from './PM/addprj';
import Profile_m from './PM/profile_m';
import Histroy_m from './PM/histroy';
import About from './PM/about';


function App() {  
  const navigate = useNavigate();
  return (
    <Routes>
      {/* Authentication */}
      <Route path='/' element={<Login nav={navigate} />} />
      <Route path='/signup' element={<Signup nav={navigate} />} />

      {/* Project Manager Routes */}
      <Route path='/home_m' element={<Home_m />} />
      <Route path='/addproject_m' element={<Project_m />} />
      <Route path='/profile_m' element={<Profile_m />} />
      <Route path='/history' element={<Histroy_m />} />
      <Route path='/about' element={<About />} />


    </Routes>
  );
}

export default App;
