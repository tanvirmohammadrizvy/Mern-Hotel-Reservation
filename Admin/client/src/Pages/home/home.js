import React from 'react'
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import Dashboard from '../../Components/dashboard/dashboard'
import Sidebar from '../../Components/sidebar/sidebar'

function home() {
  return (
    <div className='wrapper'>
      <Header />
      <Footer />
      <Dashboard />
      <Sidebar />
    </div>
  )
}

export default home