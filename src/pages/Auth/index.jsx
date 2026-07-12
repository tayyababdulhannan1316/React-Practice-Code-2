import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import NotFound from '@/components/Misc/NotFound'

const Auth = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Auth