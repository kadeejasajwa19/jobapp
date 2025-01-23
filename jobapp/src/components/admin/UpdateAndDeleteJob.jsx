import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateAndDeleteJob = () => {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
  
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3005/view')
        setJobs(response.data)
      } catch (error) {
        console.error('Failed to fetch jobs', error)
      }
    }
  
    useEffect(() => {
      fetchJobs()
    }, [])
  
    const handleDeleteJob = async (id) => {
      try {
          const response = await axios.delete(`http://localhost:3005/remove/${id}`)
          alert(response.data.message)
          setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id))
        } catch (error) {
          console.error('Failed to delete job', error)
        }
      }
  
      const handleUpdateJob = (job) => {
          navigate('/add-job', { state: { job } });
        }
  return (
    <div style={{
        padding: '20px',
        backgroundColor: 'rgba(31, 31, 46, 0.9)',
        borderRadius: '10px',
        color: '#FFFFFF',}}>
  <h1>View and Edit Jobs</h1>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
  {jobs.map((job) => (
    <li key={job.id} style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h4>{job.title}</h4>
      <p><strong style={{ color: '#FFD369' }}>Description:</strong> {job.description}</p>
      <p><strong style={{ color: '#FFD369' }}>Requirements:</strong> {job.requirements}</p>
      <p><strong style={{ color: '#FFD369' }}>Location:</strong> {job.location}</p>
      <p><strong style={{ color: '#FFD369' }}>Salary:</strong> ${job.salary}</p>
      <p><strong style={{ color: '#FFD369' }}>Job Type:</strong> {job.jobType}</p>
      <button onClick={() => handleUpdateJob(job)}>Update</button>
     <button onClick={() => handleDeleteJob(job._id)}>Delete</button>
     </li>
  ))}
  </ul>
      
    </div>
  )
}

export default UpdateAndDeleteJob
