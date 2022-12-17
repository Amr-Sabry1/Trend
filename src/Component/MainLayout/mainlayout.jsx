import React from 'react'
import NavBar from '../NavBar/navbar'

import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom';
export default function mainlayout() {
  return (
    <>

    <NavBar>
      <h2>hi</h2>
    </NavBar>
<div className="bg-dark bg-opacity-50 pb-md-0 pb-5 mb-md-0 mt-2">
   <Outlet/>
</div>
  <Footer/>

    </>
  )
}
