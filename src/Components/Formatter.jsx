import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Formatter = () => {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Formatter