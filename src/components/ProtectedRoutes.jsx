import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {

  const nameUser = useSelector(state => state.userSlice )

   

    if(nameUser){
  return (
    <Outlet/>
  )} else{
    return <Navigate to='/'/>
  }
}

export default ProtectedRoutes