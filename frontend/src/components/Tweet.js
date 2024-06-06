import React from "react";
import Avatar from "react-avatar";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdDeleteOutline  } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import {TWEET_API_END_POINT} from  "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { getRefresh } from "../redux/tweetSlice";

export default function Tweet({tweet}) {
  const {user} = useSelector(store=>store.user)
  const dispatch =useDispatch();
  const likeOrDislikeHandler = async (id) =>{
      try {
        const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`,{id:user?._id}, {
          withCredentials:true,
        })
        console.log(res)
        dispatch(getRefresh());
          toast.success(res.data.message)
        
      } catch (error) {
        toast.success(error.response.data.message)
        console.log(error)
      }
  }

  const deleteTweetHandler = async (id) =>{
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`)
        console.log(res)
        dispatch(getRefresh())
        toast.success(res.data.message);
      } catch (error) {
        toast.success(error.response.data.message);
          console.log(error)
      }
  }
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex items-center p-4 w-full">
          <div>
            <Avatar
              src="https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=600"
              size="30"
              round={true}
            />
          </div>
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-2">{`@${tweet?.userDetails[0]?.username} . 1m`}</p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center">
                <div onClick={()=>likeOrDislikeHandler(tweet?._id)} className="p-2 hover:bg-green-200 cursor-pointer rounded-full"><SlLike size={17} /></div>
                <p className="">{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
               <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full"> <FaRegCommentAlt size={16} /></div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full"><CiBookmark size={17} /></div>
                <p className="">0</p>
              </div>
              {
                user?._id === tweet?.userId && (
              <div onClick={()=>deleteTweetHandler(tweet?._id)} className="flex items-center">
                <div className="p-2 hover:bg-red-400 cursor-pointer rounded-full"><MdDeleteOutline   size={20} /></div>
                <p className=""></p>
              </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
