import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'


const Index = () => {
  return (
    <>
    <Routes>
        <Route path = "/*" element = {<Frontend />} />
        <Route path = "/dashboard/*" element = {<Dashboard />} />
        <Route path = "/auth/*" element = {<Auth />} />
        
    </Routes>
    </>
  )
}

export default Index