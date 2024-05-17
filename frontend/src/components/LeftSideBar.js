import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserCircle  } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";
import { IoIosOptions } from "react-icons/io";
import { Link } from 'react-router-dom';





function LeftSideBar() {
  return (
    <div className='w-[20%]'>
      <div className='ml-2'>
        <img src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1715345345~exp=1715345945~hmac=691454d70da95bcec6d69886b756eed7b95dbb0b306882d650c95f62a2cdc369" alt='' width={"35px"}></img>
      </div>
      <div className='my-4'>
        <Link to="/" className='flex items-center  my-5 hover:bg-gray-200 rounded-full hover:cursor-pointer px-4 py-2'>
        <FaHome size={"24px"} className='mr-5'/><h3 className='font-bold text-left'>Home</h3>
        </Link>
        <div className='flex items-center  my-5 hover:bg-gray-200 rounded-full hover:cursor-pointer px-4 py-2'>
        <IoIosOptions  size={"24px"} className='mr-5'/><h3 className='font-bold text-left'>Explore</h3>
        </div>
        <div className='flex items-center  my-5 hover:bg-gray-200 rounded-full hover:cursor-pointer px-4 py-2'>
        <IoIosNotifications  size={"24px"} className='mr-5'/><h3 className='font-bold text-left'>Notification</h3>
        </div>
        <div className='flex items-center  my-5 hover:bg-gray-200 rounded-full hover:cursor-pointer px-4 py-2'>
        <FaMessage  size={"24px"} className='mr-5'/><h3 className='font-bold text-left'>Messages</h3>
        </div>
        <Link to="/profile" className='flex items-center  my-5 hover:bg-gray-200 rounded-full hover:cursor-pointer px-4 py-2'>
        <FaUserCircle  size={"24px"} className='mr-5'/><h3 className='font-bold text-left'>Profile</h3>
        </Link>
        <div className='flex items-center  my-5 hover:bg-gray-200 rounded-full hover:cursor-pointer px-4 py-2'>
        <CgMoreO  size={"24px"} className='mr-5'/><h3 className='font-bold text-left'>Logout</h3>
        </div>
        <p> last video minutes 2:21:48</p>
      </div>

      <button className='px-4 py-2 w-full rounded-full text-white font-bold text-md bg-[cornflowerblue]'>Post</button>
    </div>
  )
}

export default LeftSideBar
