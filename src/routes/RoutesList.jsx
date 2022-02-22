import { Navigate, Route, Routes } from 'react-router-dom';
import Card from '../pages/Card';
import Login from '../pages/Login';
import Register from '../pages/Register';
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/card/:email" element={<Card />} />
    </Routes>
  );
}

export default RoutesList;
