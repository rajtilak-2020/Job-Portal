import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import JobCard from './JobCard';
import Job from './FindJobs';

export default function JobList() {
  let [jobs,setJobs]=useState([]);
  let [categories,setcategories]=useState([]);
let[filterCategoryValue,setFilterCategoryValue]=useState([]);

//job search
  const JobFilters = ({ setJobs }) => {

  const [filters, setFilters] = useState({ search: '', category: 'all', location: '' });

  useEffect(() => {
    axios.get(`https://901522ec-fa4d-4b63-aecc-a237dc24ac90.mock.pstmn.io/jobs/?search=${filters.search}&category=${filters.category}&location=${filters.location}`)
      .then(res => setJobs(res.data));
  });
 setFilters(setJobs);

}

//job categories
const filterCategories=(slug)=>{
        if(filterCategoryValue.includes(slug)){
          var finalcategoryData=filterCategoryValue.filter((v)=>{
                                                                    if(v!=slug){
                                                                      return v
                                                                    }
          })

               finalcategoryData=[...finalcategoryData];
              setFilterCategoryValue(finalcategoryData)

        }
        else
        {
          //  console.log(slug);
          const finalcategoryData=[...filterCategoryValue,slug];
          setFilterCategoryValue(finalcategoryData);
        }
          console.log(filterCategoryValue);
   }
    useEffect(()=>{
          axios.get(' https://wscubetech.co/ecommerce-api/categories.php')
          .then((response)=>{
                            setcategories(response.data.data)
                          })
            .catch(()=>{
                            toast.error('Something Went Wrong.Please try again')
                            }) 
    },[]);

    //jobtype filter
    // let [jobType,setJobType]=useState([]);
let[filterJobsValue,setFilterJobsValue]=useState([]);

const filterJobs=(slug)=>{
        // by running lets check which type of value i have in array or not to filter
        // before runing loop make sure that id(brands_id) exits or not in array so

        if(filterJobsValue.includes(slug)){
        // if having this value than filter
          var finalJobData=filterJobsValue.filter((v)=>{
                                                              if(v!=slug){
                                                                return v
                                                              }
                                                      })
          var finaljobData=[...finaljobData];
          setFilterJobsValue(finalJobData);
        }
        else
        {
            // console.log(slug);
          const finalJobData=[...filterJobsValue,slug];
          setFilterJobsValue(finalJobData);
        }
      console.log(filterJobsValue);
  }
useEffect(()=>{
      axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((response)=>{
                        setJobs(response.data.data)
                      })
        .catch(()=>{
                        toast.error('Something Went Wrong.Please try again')
                        }) 
},[]);

//sorting by salary
let [sorting,setSorting] = useState('');

// here usestate is empty because we get direct value

let[salaryFrom,setSalaryFrom]=useState(0);
let[salaryTo,setSalaryTo]=useState(100000);


useEffect(()=>{
      axios.get('https://wscubetech.co/ecommerce-api/products.php', {
        params:{
                limit:12, // in limit key we assign like we want 12 value
                         // here params is key inside this pass parameter
                         // lets pass here one more parameter
                sorting : sorting,
                categories : filterCategoryValue.toString(),
                jobs:filterJobsValue.toString(),
                salary_from:salaryFrom,
                salary_to: salaryTo,
              }
      
      })
      .then((response)=>{
                        setJobs(response.data.data)
                      })
      .catch(()=>{
                        toast.error('Something Went Wrong.Please try again')
                        }) 
},[sorting,filterCategoryValue,filterJobsValue,salaryFrom,salaryTo]);

   const filterSorting=(event)=>{
          setSorting(event.target.value);
  }

  //filter via salary
  const rangeSalary=(event)=>{
  
  setSalaryTo(event.target.value)

}

const salaryFromFilter=(event)=>{
    setSalaryFrom(event.target.value)
}

const salaryToFilter=(event)=>{
   setSalaryTo(event.target.value)
}

  return (
    <>
      {/* Main Content */}
      <div class="container py-5">
          <div class="row">
                          {/* <!-- Filter Button (Mobile) --> */}
                          <div class="col-12 d-lg-none mb-3">
                            <button class="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center gap-2"
                              type="button"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#filterSidebar">
                              <i class="fa fa-filter"></i> Filter Jobs
                            </button>
                          </div>
                           {/* <!-- Sidebar Filters --> */}
            <div class="col-lg-3">
              {/* <!-- Desktop Filters --> */}
              <div class="card shadow-sm d-none d-lg-block">
                    <div class="card-body">
                                  <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h5 class="card-title mb-0">Filters</h5>
                                    <button class="btn btn-sm btn-link text-decoration-none p-0">Clear All</button>
                                  </div>
      
                                  {/* <!-- Categories Filter --> */}

                                  <div class="mb-4 category-scroll">
                                    <h6 class="fw-bold mb-3">Categories</h6>
                                    {/* lets set terninary condition that if data having in api than run  this loop only  */}

                                    {
                                      (categories.length>0)
                                      ?
                                        categories.map((v,i)=>{
                                          return(
                                            <DisplayCategories filterCategories={filterCategories} key={i} category={v}></DisplayCategories>
                                           
                                          )
                                        })
                                      :

                                      ''
                                      }
                                          
                                  </div>

                                   {/* <!-- Jobs Filter --> */}
                                  
                                  <div class="mb-4 category-scroll">
                                    <h6 class="fw-bold mb-3">Jobs</h6>
                                   
                                    {
                                      (jobs.length>0)
                                      ?
                                        jobs.map((v,i)=>{
                                          return(
                                            <DisplayJobs  filterJobs={filterJobs} key={i} jobs={v}></DisplayJobs>
                                           
                                          )
                                        })
                                      :
                                      ''
                                    }
                                  </div>
                                  {/* salary range filter */}
                                  
                                  
                                  <div class="mb-3">
                                      <h6 class="fw-bold mb-3">Salary Range</h6>

                                      <div class="d-flex justify-content-between mb-2">
                                        <span>$0</span>
                                        <span>$100000</span>
                                      </div>

                                      <input type="range" onChange={rangeSalary}  class="form-range" min="0" max="100000" step="1000" id="salaryRange" />
                                      <div class="row g-2 mt-2">
                                          <div class="col-6">

                                                <div class="input-group input-group-sm">
                                                  <span class="input-group-text">$</span>
                                                  <input type="number" class="form-control" placeholder="Min" min="0" onChange={salaryFromFilter} />
                                                </div>

                                          </div>

                                          <div class="col-6">

                                              <div class="input-group input-group-sm">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" placeholder="Max" min="0" onChange={salaryToFilter} />
                                                
                                              </div>

                                          </div>
                                      </div>
                                  </div>
           {/* <!-- Mobile Filters (Offcanvas) --> */}

            <div class="offcanvas offcanvas-start" tabindex="-1" id="filterSidebar">
                        <div class="offcanvas-header">
                          <h5 class="offcanvas-title">Filters</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

              <div class="offcanvas-body">
                   {/* <!-- Categories Filter --> */}

                        <div class="mb-4">
                                  <h6 class="fw-bold mb-3">Categories</h6>

                                  {
                                    (categories.length>0)
                                    ?
                                      categories.map((v,i)=>{
                                        return(
                                          <DisplayCategories filterCategories={filterCategories} key={i} category={v}></DisplayCategories>
                                         
                                        )
                                      })
                                      :
                                      ''
                                  }
                        </div>
                         {/* <!-- Jobs Filter --> */}

                        <div class="mb-4">
                          <h6 class="fw-bold mb-3">Jobs</h6>

                          {
                          (jobs.length>0)
                            ?
                              jobs.map((v,i)=>{
                                return(
                                        <DisplayJobs filterJobs={filterJobs} key={i} jobs={v}></DisplayJobs>
                                       
                                      )
                              })
                              :
                              ''
                          }

                        </div>   
                         {/* <!-- Salary Range Filter --> */}
                      <div class="mb-4">
                               <h6 class="fw-bold mb-3">Salary Range</h6>
                                  <div class="d-flex justify-content-between mb-2">
                                        <span>$0</span>
                                        <span>$100000</span>
                                  </div>
                                <input type="range" onChange={rangeSalary} class="form-range" min="0" max="100000" step="10" id="mobileSalaryRange"  />
                                <div class="row g-2 mt-2">

                                          <div class="col-6">
                                            <div class="input-group input-group-sm">
                                              <span class="input-group-text">$</span>
                                              <input type="number" class="form-control" placeholder="Min" min="0" onChange={salaryFromFilter}  />
                                            </div>
                                          </div>

                                          <div class="col-6">
                                            <div class="input-group input-group-sm">
                                              <span class="input-group-text">$</span>
                                              <input type="number" class="form-control" placeholder="Max" min="0" onChange={salaryToFilter}  />
                                            </div>
                                          </div>
                                </div>
                      </div> 
                        <button class="btn btn-primary w-100">Apply Filters</button>

       </div>      
            </div>
      
            {/* Main job Content */}
            <div class="col-lg-9">
                  {/* Top bar with results count and sorting */}
              <div class="card shadow-sm mb-4">
                <div class="card-body">
                  <div class="row align-items-center">

                        <div class="col-md-6 mb-2 mb-md-0">
                          <h6 class="mb-0">{jobs.length}Jobs</h6>
                          <small class="text-muted">Filtered results</small>
                        </div>

                        <div class="col-md-6">

                                <div class="d-flex align-items-center justify-content-md-end">
                                  <i class="fa fa-sort text-muted me-2"></i>
                                  <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>

                                      <select class="form-select form-select-sm w-auto" onChange={filterSorting}>
                                        {/* here i call function for sorting */}
                                        <option value="">Newest</option>
                                        <option value="1">Name : A-Z</option>
                                        <option value="2">Name : Z-A</option>
                                        <option value="3">Salary: Low to High</option>
                                        <option value="4">Salary: High to Low</option>
                                      </select>
                                </div>
                        </div>

                  </div>
                </div>
              </div>   




       {/* <Form className="row g-3 mb-4">
      <Form.Group className="col-md-4">
        <Form.Control type="text" placeholder="Search jobs..." onChange={e => setFilters({...filters, search: e.target.value})} />
      </Form.Group>
      <Form.Group className="col-md-3">
        <Form.Select onChange={e => setFilters({...filters, category: e.target.value})}>
          <option value="all">All Categories</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="col-md-3">
        <Form.Control type="text" placeholder="Location" onChange={e => setFilters({...filters, location: e.target.value})} />
      </Form.Group>
      <col-md-2><Button variant="outline-primary">Filter</Button></col-md-2>
    </Form> */}
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-lg-4 g-4">
         {/* {
          
             jobs.map((v,i)=>{
              return(
                    <JobCard key={i} Jobs={v}></JobCard>
                     )
              })
        }
        */}
      </div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  )
}

function DisplayCategories({category,filterCategories}){
  return(
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id={`${'category_'+category.id}`} onClick={()=>filterCategories(category.slug)} />
            <label class="form-check-label" for={`${'category_'+category.id}`}>{category.name}</label>
        </div>
  )
}

function DisplayJobs({jobs,filterJobs}){
  return(
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id={jobs.id}  onClick={()=>filterJobs(jobs.slug)} />
            <label class="form-check-label" for={jobs.id}>{jobs.name}</label>
        </div>
  )
}
