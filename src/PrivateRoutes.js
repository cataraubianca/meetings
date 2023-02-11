import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
export const PrivateRoutes = () => {
    const [user,setUser]=useState(window.localStorage.getItem('currentUser'));

return (
    user ? <Outlet/> : <Navigate to='/Authentication/Login'/>
  )
}