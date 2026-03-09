import React from 'react'
import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'



export default function Home() {
  return (
    <>
   <Navbar/>
   <Dashboard/>
   
    </>
  )
}
//requirements of project implementation
// User roles: Job seekers (profiles, apply, track applications) and employers (post jobs, view applicants).

//Job search with filters (location, salary, type), pagination.

//Dashboards: Seeker views applied/saved jobs; employer manages postings/applications.

//Secure auth, form validation (client/server-side), resume upload/download.
