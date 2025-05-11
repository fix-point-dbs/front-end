import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';

function App() {

  return (
    <>
      <Routes>
      <Route path="/users" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
