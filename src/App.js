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
        <Route path="/dental_web" element={<LoginPage/>}/>
        <Route path="/dental_web/details" element={<PersonalDetailsForm />} />
        <Route path="/dental_web/complications" element={<PastHistory/>} />
        <Route path="/dental_web/complaints" element={<Complaints/>} />
        <Route path="/dental_web/teethchart" element={<TeethImages/>}/>
        <Route path="/dental_web/billing" element={<BillingForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
