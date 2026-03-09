import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router";
import JobList from './Pages/JobList';
import Login from './Pages/Login';
import RootLayout from './Pages/RootLayout';
import Home from './Pages/Home';
import JobDetails from './Pages/JobDetails';
import Contact from './Pages/Contact';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="find-jobs/joblist" element={<JobList/>} />
          <Route path="joblist/job-details" element={<JobDetails/>} />
          <Route path="/contact-us" element={<Contact/>} />
      </Route> 
      
    </Routes>
  </BrowserRouter>
)
