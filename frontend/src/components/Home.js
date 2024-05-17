import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSideBar></LeftSideBar>
        <Outlet/>
        <RightSideBar></RightSideBar>
    </div>
  )
}

export default Home
