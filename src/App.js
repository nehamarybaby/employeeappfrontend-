import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeeform" element={<EmployeeForm />} />
        </Routes>
    </div>
  );
}

export default App;
