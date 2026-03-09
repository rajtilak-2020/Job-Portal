import React from 'react'
import { Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Links } from 'react-router';
export default function Navbar() {
  return (
    <>
        {/* <!-- Header --> */}
    <header class="sticky-top bg-white border-bottom shadow-sm">
      <div class="container py-3">
        <div class="row align-items-center">
          {/* <!-- Logo --> */}
          <div class="col-md-3 col-6 mb-2 mb-md-0">
            <Link href='index.html' className='text-decoration-none'>
                <h1 class="fs-4 fw-bold m-0">JOB PORTAL</h1>
            </Link>
          </div>

          {/* <!-- Search --> */}
          <div class="col-md-5 col-12 order-md-1 order-3 mt-2 mt-md-0">
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0">
                <i class="fa fa-search text-muted"></i>
              </span>
              <input type="text" class="form-control border-start-0" placeholder="Search jobs..."/>
            </div>
          </div>

          {/* <!-- Navigation --> */}
          <div class="col-md-4 col-6 text-end order-md-2 order-2">
            <div class="d-flex justify-content-end align-items-center">
              <Link href="/job-list" class="btn btn-link text-dark d-none d-md-inline-block">Find Jobs</Link>
              <Link href="/dashboard" class="btn btn-link text-dark d-none d-md-inline-block">Upload Jobs</Link>
               <Link  href="pages/login" class="btn btn-link text-dark d-none d-md-inline-block">Login</Link>
              <Link class="btn btn-link text-dark position-relative">
                <i class="fa fa-user"></i>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </header> 
    </>
  )
}
