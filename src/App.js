import React, { useState } from 'react'
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import './App.css'
import JobsPagination from './JobsPagination'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs App</h1>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error Try refreshing.</h3>}
      {<h2>{jobs.length}</h2>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  )
}

export default App
