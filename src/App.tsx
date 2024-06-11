import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clicked from './pages/Clicked';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Clicked' element={<Clicked />} />
    </Routes>
  );
}

export default App;
