import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
  
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchAppliedJobs = async () => {
        try {
          const response = await axios.get('/api/applied-jobs') //backend API URL here
          
          // Check if response.data is an array before setting it
          if (Array.isArray(response.data)) {
            setAppliedJobs(response.data)  // Set appliedJobs only if it's an array
          } else {
            setError('Received data is not an array')
          }
        } catch (err) {
          setError('Failed to fetch applied jobs')
          console.error(err)
        } finally {
          setLoading(false)
        }
      }
  
      fetchAppliedJobs()
    }, [])
  return (
    <div
       style={{
        display: 'flex',
        height: '100vh',
        // backgroundImage: 'url("/path-to-your-background.jpg")',  
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
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
        <h1 style={{ fontWeight: 'bold', color: '#FFB400' }}>Applied Jobs</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Here you can view all the jobs you have applied to. Manage your applications easily.
        </p>
        
        {error && (
          <div style={{ color: 'red' }}>
            <p>{error}</p>
          </div>
        )}

        {loading ? (
          <div style={{ color: '#FFFFFF' }}>Loading applied jobs...</div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {Array.isArray(appliedJobs) && appliedJobs.length > 0 ? (
              appliedJobs.map((job) => (
                <div
                  key={job.id}
                  style={{
                    padding: '20px',
                    backgroundColor: 'rgba(31, 31, 46, 0.9)',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s',
                  }}
                >
                  <h2 style={{ color: '#FFB400' }}>{job.title}</h2>
                  <h3>{job.company}</h3>
                  <p>Applied on: {new Date(job.dateApplied).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p style={{ color: '#FFFFFF' }}>No applied jobs found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppliedJobs
