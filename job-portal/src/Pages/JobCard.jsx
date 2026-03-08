import React from 'react'

export default function JobCard(job) {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{job.title}</h5>
          <p className="card-text">{job.description.slice(0,100)}...</p>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </>
  )
}
