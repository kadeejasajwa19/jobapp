import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const BrowseJobs = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [jobs, setJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])
    // const [locationFilter, setLocationFilter] = useState('')
    // const [salaryFilter, setSalaryFilter] = useState('')
    // const [jobTypeFilter, setJobTypeFilter] = useState('')
  
    const navigate = useNavigate()
   
    const handleJobAppn = () =>{
      navigate('/apply-job')
    }
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3005/view')
        console.log(response.data)
        setJobs(response.data)
      } catch (error) {
        console.error('Failed to fetch jobs', error)
      }
    }
      useEffect(() => {
        fetchJobs()
      }, [])
  
  
    useEffect(() => {
      const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered)
    }, [searchTerm, jobs])
  //   {const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesLocation = locationFilter
  //       ? job.location.toLowerCase().includes(locationFilter.toLowerCase())
  //       : true;
  //     const matchesSalary = salaryFilter
  //       ? job.salary >= parseInt(salaryFilter, 10)
  //       : true;
  //     const matchesJobType = jobTypeFilter
  //       ? job.jobType.toLowerCase() === jobTypeFilter.toLowerCase()
  //       : true;
  
  //     return matchesSearch && matchesLocation && matchesSalary && matchesJobType;
  //   });
  //   setFilteredJobs(filtered);
  // }, [searchTerm, locationFilter, salaryFilter, jobTypeFilter, jobs]);
  return (
    <div
    style={{
        display: 'flex',
        height: '100vh',
        backgroundImage: 'url("/path-to-your-background.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF',
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', color: '#FFB400' }}>Browse Jobs</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Here you can browse all available job listings and find the perfect opportunity for you.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(31, 31, 46, 0.9)',
            padding: '10px',
            borderRadius: '30px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <SearchIcon style={{ color: '#FFB400' }} />
          </div>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="search"
            style={{
              flex: 1,
              padding: '10px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#FFFFFF',
              fontSize: '1rem',
              borderRadius: '30px',
            }}
          />
        </div>

        <div
          style={{
            padding: '20px',
            backgroundColor: 'rgba(31, 31, 46, 0.9)',
            borderRadius: '10px',
            color: '#FFFFFF',
          }}
        >

{/* <input
            type="text"
            placeholder="Filter by Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              outline: 'none',
              width: '200px',
            }}
          />
          <input
            type="number"
            placeholder="Filter by Minimum Salary"
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              outline: 'none',
              width: '200px',
            }}
          />
          <select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              outline: 'none',
              width: '200px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <option value="">Filter by Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>


        <div
          style={{
            padding: '20px',
            backgroundColor: 'rgba(31, 31, 46, 0.9)',
            borderRadius: '10px',
            color: '#FFFFFF',
          }}
        > */}






          <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
        <li key={job.id} style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h4>{job.title}</h4>
          <p><strong style={{ color: '#FFD369' }}>Description:</strong> {job.description}</p>
          <p><strong style={{ color: '#FFD369' }}>Requirements:</strong> {job.requirements}</p>
          <p><strong style={{ color: '#FFD369' }}>Location:</strong> {job.location}</p>
          <p><strong style={{ color: '#FFD369' }}>Salary:</strong> ${job.salary}</p>
          <p><strong style={{ color: '#FFD369' }}>Job Type:</strong> {job.jobType}</p>
          <button>save</button>
         <button onClick={handleJobAppn}>apply</button>
         </li>
      ))
):(<p>no jobs found</p>)}
      </ul>
        </div>
      </div>
      
    </div>
  )
}

export default BrowseJobs
