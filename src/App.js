import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import UserDetails from './component/UserDetails';
function App() {

  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  return (
    <BrowserRouter>
      <Login />
      <Routes>
        <Route path="/user-details" element={<UserDetails userDetails={userDetails} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
