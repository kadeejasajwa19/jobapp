import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const AddJob = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
      title: '', description: '', requirements: '',
      location: '', salary: '', jobType: 'Full Time',
    })
    const location = useLocation()
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
    }
    
  //   const handleUpdation = (e) =>{
  //     navigate("/manage-jobs")
  //   }
    useEffect(() => {
      if (location.state && location.state.job) {
        setForm(location.state.job)
      }
    }, [location.state])
  
    const handleAddJob = async (e) => {
      e.preventDefault()
      try{
  
  let updatedJobData
  if (location.state && location.state.job) {
    const response = await axios.put(`http://localhost:3005/update/${location.state.job._id}`, form);
          updatedJobData = response.data;
          alert("Job updated successfully!");
  } else {
    const response = await axios.post("http://localhost:3005/add", form);
          updatedJobData = response.data;
          alert("Job added successfully!")
  }
  
  navigate("/update-delete-job", {
    state: { jobData: updatedJobData },
  });
  } catch (error) {
  console.error("Error occurred while adding/updating job:", error);
  alert("There was an error while processing the job.");
  }
    }
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
      <Sidebar/>
      <div
        style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', color: '#FFB400' }}>Manage Jobs</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Here you can add, edit, and manage all job postings. Use the options
          below to make updates.
        </p>
        {/* <button onClick={handleUpdation}>click here to update and delete</button> */}
        <form onSubmit={handleAddJob} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#333' }}>Add a New Job</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Job Title: <br />
              <input type="text" name="title" value={form.title} onChange={handleInputChange} style={{ width: '100%', padding: '8px' }} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Description: <br />
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
                rows="3"
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Requirements: <br />
              <textarea
                name="requirements"
                value={form.requirements}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
                rows="3"
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Location: <br />
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Salary: <br />
              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Job Type: <br />
              <select
                name="jobType"
                value={form.jobType}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {location.state != null ? 'Update Job' : 'Add Job'}
          </button>
        </form>
      </div>
       </div>
  )
}

export default AddJob
