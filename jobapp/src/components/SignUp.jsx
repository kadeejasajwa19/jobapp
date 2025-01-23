import { Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [userData,setuserData] = useState({name:'',email:'',password:'',confirmpassword:''})
    const[error,setError] = useState('')
    const navigate = useNavigate()

    const handleSignup = async()=>{
        if(userData.password !== userData.confirmpassword){
            setError('passwords do not match')
            return
        }
        try{
            const response=await axios.post('http://localhost:3005/signup',{
                name:userData.name,
                email:userData.email,
                password:userData.password
            })
            alert('user registered successfully!')
            navigate('/login')
        }
        catch(error){
            console.error(error)
        }
    }


  return (
    <Box
    sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d') no-repeat center center/cover`,
        padding: '20px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
          zIndex: 1,
        }}
      ></Box>

      <Paper
        elevation={10}
        sx={{
          padding: '30px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          borderRadius: '15px',
          backgroundColor: '#ffffff',
          zIndex: 2,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#162c49' }}>
          Sign Up
        </Typography>

        <Box component="form" sx={{ mt: 2 }}>

          <TextField
            label="Name"
            name="name"
            fullWidth
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon/>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            value={userData.confirmPassword}
            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
            margin="normal"
            error={!!error}
            helperText={error}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />


          <Button
            variant="contained"
            fullWidth
            onClick={handleSignup}
            sx={{
              backgroundColor: '#1e88e5',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginTop: '20px',
              padding: '10px 15px',
              borderRadius: '10px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Signup
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}


export default SignUp
