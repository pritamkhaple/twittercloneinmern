import React from "react";
import Avatar from "react-avatar";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";

export default function Tweet() {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex items-center p-4 w-full">
          <div>
            <Avatar
              src="https://media.licdn.com/dms/image/D4D35AQEmtqBn5s3QYg/profile-framedphoto-shrink_200_200/0/1708930324793?e=1715958000&v=beta&t=8ksw4svqMpxHWrGzQy49aUMghR_S0A1xFpD0eOKirbY"
              size="30"
              round={true}
            />
          </div>
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Khaple</h1>
              <p className="text-gray-500 text-sm ml-2">@khapledevloper . 1m</p>
            </div>
            <div>
              <p>Hi lorem lsdoiu ewifeb oinid ubewin inqndi</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full"><SlLike size={17} /></div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
               <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full"> <FaRegCommentAlt size={16} /></div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full"><AiOutlineRetweet size={20} /></div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full"><CiBookmark size={17} /></div>
                <p className="">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
