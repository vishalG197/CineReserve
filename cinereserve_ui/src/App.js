import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import useTitle from './hooks/useTitle';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import Loading from './components/Loading';
import Public from './components/Public';
function App() {
  useTitle('welcome to CineReserve')
  
  return (
   <Routes>
    <Route path="/" element= {<Layout/>}>
    <Route index element={<Public/>} />
    <Route path="signin" element={<Login/>}/>
    </Route>
   </Routes>
  );
}

export default App;
