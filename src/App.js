import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalDetailsForm from './pages/personalDetails';
import PastHistory from './pages/pastHistory';
import Complaints from './pages/complaints';
import LoginPage from './pages/startpage';
import BillingForm from './pages/billPage';
import TeethImages from './pages/TeethChart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/details" element={<PersonalDetailsForm />} />
        <Route path="/complications" element={<PastHistory/>} />
        <Route path="/complaints" element={<Complaints/>} />
        <Route path="/teethchart" element={<TeethImages/>}/>
        <Route path="/billing" element={<BillingForm/>} />

      </Routes>
    </Router>
  );
}

export default App;
