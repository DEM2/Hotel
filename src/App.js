import React from 'react';
import Habitaciones from './pages/Habitaciones';
import RoomDetails from './pages/RoomDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/room/:id" element={<RoomDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;