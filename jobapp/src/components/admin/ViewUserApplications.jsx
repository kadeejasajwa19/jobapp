import React from 'react'
import Sidebar from './Sidebar'

const ViewUserApplications = () => {
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
          gap: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', color: '#FFB400' }}>View User Applications</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Below is the list of all user applications submitted for various job postings.
        </p>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'rgba(31, 31, 46, 0.9)',
            borderRadius: '10px',
            color: '#FFFFFF',
          }}
        >
          <h2>Applications</h2>
          <p>Application data will be displayed here...</p>
        </div>
      </div>
      
    </div>
  )
}

export default ViewUserApplications
