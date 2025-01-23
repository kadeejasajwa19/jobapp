import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: "260px",
        backgroundColor: "#1E2A39",
        color: "#FFFFFF",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          borderBottom: "1px solid #2F3E4D",
          paddingBottom: "10px",
          marginBottom: "30px",
        }}
        onClick={() => navigate("/admin-dashboard")}
      >
        Admin Dashboard
      </Typography>

      <Box display="flex" flexDirection="column" gap={3} flex={1}>
        <Button
          variant="text"
          sx={{
            color: "#FFFFFF",
            justifyContent: "flex-start",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2F3E4D",
            },
          }}
          onClick={() => navigate("/manage-jobs")}
        >
          Manage Jobs
        </Button>

        <Button
          variant="text"
          sx={{
            color: "#FFFFFF",
            justifyContent: "flex-start",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2F3E4D",
            },
          }}
          onClick={() => navigate("/view-user-applications")}
        >
          View Applications
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF705A",
          color: "#FFFFFF",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FF866E",
          },
        }}
        onClick={() => navigate("/")}
      >
        Logout
      </Button>
    </Box>
  )
}

export default Sidebar
