import React, { useEffect } from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import useOtherUsers from '../hooks/useOtherUsers'
import { useSelector } from 'react-redux'
import useGetMyTweets from '../hooks/useGetMyTweets'
// import { useGetProfile } from '../hooks/useGetProfile'


function Home() {

  const {user, otherUsers} = useSelector(store=>store.user)
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login")
    } 
  }, [])
  
  //custom hook

  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);


  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSideBar></LeftSideBar>
        <Outlet/>
        <RightSideBar otherUsers={otherUsers}></RightSideBar>
    </div>
  )
}

export default Home
