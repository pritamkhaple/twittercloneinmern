import axios from 'axios';
import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { FaRegImage } from "react-icons/fa";
import {TWEET_API_END_POINT} from  "../utils/constant";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';


export default function CreatePost() {

    const  [description, setDescription] = useState("");
    const {user} = useSelector(store=>store.user)
    const {isActive} = useSelector(store => store.tweet);
    const dispatch = useDispatch();

    const submitHandler = async () =>{
        try {
            const res = await axios.post(`${TWEET_API_END_POINT}/create`, {description, id:user?._id}, {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true,
            });
            dispatch(getRefresh())
            if (res.data.success){
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error)   
        }
        setDescription("");
    }

    const forYouHandler = () =>{
        dispatch(getIsActive(true))
    }

    const followingHandler = () =>{
        dispatch(getIsActive(false))
    }

  return (
    <div className='w-[100%]'>
        <div className=''>
        <div className='flex justify-between border-b border-gray-100 mb-2'>
            <div onClick={forYouHandler} className='w-full '><div className={`${isActive ? "border-b-4 border-blue-700": "border border-transparent"} cursor-pointer hover:bg-gray-100 text-center`}><h1 className='px-4 py-3 font-semibold text-gray-600 text-center text-lg '>For you</h1></div></div>
            <div onClick={followingHandler} className='w-full '><div className={`${!isActive ? "border-b-4 border-blue-700": "border border-transparent"} cursor-pointer hover:bg-gray-100 text-center`}><h1 className='px-4 py-3 font-semibold text-gray-600 text-lg  text-center'>Following</h1></div></div>
        </div>
        <div className=''>
            <div className='flex items-center p-5 '>
                <div>
            <Avatar src="https://media.licdn.com/dms/image/D4D35AQEmtqBn5s3QYg/profile-framedphoto-shrink_200_200/0/1708930324793?e=1715958000&v=beta&t=8ksw4svqMpxHWrGzQy49aUMghR_S0A1xFpD0eOKirbY" size="30" round={true} /></div>
                <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='What is happeining?' className='w-full ml-2 outline-none border-none text-lg'></input>
            </div>
            <div className='flex items-center justify-between my-4 border-b border-gray-100 px-2 py-2'>
                <div>
                    <FaRegImage size={"20px"}/>
                </div>
                <button onClick={submitHandler} className='px-4 py-1 rounded-full text-white font-semibold text-sm text-right bg-[cornflowerblue]'>Post</button>
            </div>
        </div>
        <div></div>
        </div>
    </div>
  )
}
