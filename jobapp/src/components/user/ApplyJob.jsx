import React, { useState } from 'react'

const ApplyJob = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobRole: "",
        address: "",
        city: "",
        pincode: "",
        date: "",
        cv: null,
      });
    
      const jobRoles = ["Software Engineer", "Designer", "Manager", "Marketer"];
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
          ...formData,
          [name]: type === "file" ? files[0] : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Application submitted successfully!");
      };
    
      return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
          <h1>Job Application</h1>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ color:"rgb(8, 48, 128)" }}>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                />
              </div>
              <div style={{ color:"rgb(8, 48, 128)" }}>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                />
              </div>
            </div>
    
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flex: "2" , color:"rgb(8, 48, 128)"}}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                />
              </div>
              <div style={{ flex: "1",color:"rgb(8, 48, 128)" }}>
                <label>Job Role:</label>
                <select
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                >
                  <option value="">Select Role</option>
                  {jobRoles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
    
           <div style={{ color:"rgb(8, 48, 128)" }}>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ padding: "8px", width: "100%" }}
              />
            </div>
       
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{color:"rgb(8, 48, 128)"}}>
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                />
              </div>
              <div style={{ color:"rgb(8, 48, 128)" }}>
                <label>Pincode:</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                />
              </div>
            </div>
    
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", width: "100%" }}
                />
              </div>
              <div style={{ color:"rgb(8, 48, 128)" }}>
                <label>Upload CV:</label>
                <input
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  required
                  style={{ padding: "8px" }}
                />
              </div>
            </div>
    
            <div style={{ textAlign: "right" }}>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      );
    };
    
export default ApplyJob
