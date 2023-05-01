import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
// import CoverItem from './listitem/listitem';
import RegisterForm from './components/Register';  
import Login from './components/Login';
import DetaiIitem from './detailitem/detailitem';

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<RegisterForm/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile />} />
    {/* <Route path="/listitem" element={<CoverItem />} /> */}
    <Route path="/detailitem" element={<DetaiIitem />} />
    
  </Routes>
}

export default App;
