import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function RightSideBar({otherUsers}) {
  return (
    <div className="">
      <div className="p-2 bg-gray-100 rounded-full outline-none w-full flex items-center px-1">
        <CiSearch size={"22px"} />
        <input
          className="text-gray-500 bg-transparent outline-none w-full p-2"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4 ">
        <h1 className="font-bold">Who To Follow</h1>
        {
          otherUsers?.map((user) => {
          return (
            <div key={user?._id} className="ml-2 my-2 border border-gray-200 rounded-full w-full justify-between p-1 flex items-center gap-5">
              <div className="flex justify-center items-center">
                <Avatar
                  src="https://media.licdn.com/dms/image/D4D35AQEmtqBn5s3QYg/profile-framedphoto-shrink_200_200/0/1708930324793?e=1715958000&v=beta&t=8ksw4svqMpxHWrGzQy49aUMghR_S0A1xFpD0eOKirbY"
                  size="30"
                  round={true}
                />
                <div className="ml-2">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-gray-500 text-sm">{`@${user?.username}`}</p>
                </div>
              </div>
              <div>
              <Link to={`/profile/${user?._id}`}>
                <button className="bg-[cornflowerblue] text-white font-bold rounded-full p-2 w-full text-sm">
                  Profile
                </button>
              </Link>
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default RightSideBar;
