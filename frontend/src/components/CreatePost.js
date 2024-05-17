import React from 'react'
import Avatar from 'react-avatar'
import { FaRegImage } from "react-icons/fa";



export default function CreatePost() {
  return (
    <div className='w-[100%]'>
        <div className=''>
        <div className='flex justify-between border-b border-gray-100 mb-2'>
            <div className='w-full '><h1 className='px-4 py-3 font-semibold text-gray-600 text-center text-lg cursor-pointer hover:bg-gray-100'>For you</h1></div>
            <div className='w-full '><h1 className='px-4 py-3 font-semibold text-gray-600 text-lg cursor-pointer hover:bg-gray-100 text-center'>Following</h1></div>
        </div>
        <div className=''>
            <div className='flex items-center p-5 '>
                <div>
            <Avatar src="https://media.licdn.com/dms/image/D4D35AQEmtqBn5s3QYg/profile-framedphoto-shrink_200_200/0/1708930324793?e=1715958000&v=beta&t=8ksw4svqMpxHWrGzQy49aUMghR_S0A1xFpD0eOKirbY" size="30" round={true} /></div>
                <input type='text' placeholder='What is happeining?' className='w-full ml-2 outline-none border-none text-lg'></input>
            </div>
            <div className='flex items-center justify-between my-4 border-b border-gray-100 px-2 py-2'>
                <div>
                    <FaRegImage size={"20px"}/>
                </div>
                <button className='px-4 py-1 rounded-full text-white font-semibold text-sm text-right bg-[cornflowerblue]'>Post</button>
            </div>
        </div>
        <div></div>
        </div>
    </div>
  )
}
