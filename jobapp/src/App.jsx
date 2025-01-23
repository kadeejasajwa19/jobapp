import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import UserDashboard from './components/user/UserDashboard'
import BrowseJobs from './components/user/BrowseJobs'
import AppliedJobs from './components/user/AppliedJobs'
import ManageJobs from './components/admin/ManageJobs'
import ViewUserApplications from './components/admin/ViewUserApplications'
import AddJob from './components/admin/AddJob'
import UpdateAndDeleteJob from './components/admin/UpdateAndDeleteJob'
import ApplyJob from './components/user/ApplyJob'
import AdminDashboard from './components/admin/AdminDashboard'
 
const Layout = ({ children }) => {
  const location = useLocation() 
  const hideNavbarRoutes = ["/admin-dashboard", "/manage-jobs", "/view-user-applications","/user-dashboard","/browse-jobs","/applied-jobs"]
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname)

  return (
    <>
      {shouldShowNavbar && <NavBar />}
      {children}
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/view-user-applications" element={<ViewUserApplications />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/update-delete-job" element={<UpdateAndDeleteJob />} />
        <Route path="/apply-job" element={<ApplyJob/>} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
