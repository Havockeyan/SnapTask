import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Login from './Auth/Ulogin';
import Signup from './Auth/signup';


function App() {  
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Login nav={navigate} />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
