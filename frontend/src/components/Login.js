import React, { useState } from "react";
import axios from "axios";
import {USER_API_END_POINT} from "../utils/constant"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
        //login
        try {
            const res =  await axios.post(`${USER_API_END_POINT}/login`,{email,password},{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials:true
            }) 
            dispatch(getUser(res?.data?.user)); 
            console.log(res);
            if (res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }
            
        } catch (error) {
            toast.success(error.response.data.message);
            console.log(error);
            
        }
    } else {
        //sign up or register
        try {
            const res =  await axios.post(`${USER_API_END_POINT}/register`,{name,username,email,password},{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials:true
            }) 
            console.log(res);
            if (res.data.success) {
                setIsLogin(true)
                toast.success(res.data.message);
            }
            
        } catch (error) {
            toast.success(error.response.data.message);
            console.log(error);
            
        }
    }
  };

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1715345345~exp=1715345945~hmac=691454d70da95bcec6d69886b756eed7b95dbb0b306882d650c95f62a2cdc369"
            width={"500px"}
          ></img>
        </div>
        <div>
          <div className="my-5 ">
            <h1 className="font-bold text-7xl">Happening Now.</h1>
          </div>
          <h1 className="font-bold mt-4 mb-2 text-2xl">
            {isLogin ? "Login" : "Sign up"}
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col w-[50%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-blue-500 border px-3 font-semibold py-1 my-1 rounded-full border-gray-200"
                  placeholder="Name"
                ></input>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-blue-500 border px-3 font-semibold py-1 my-1 rounded-full border-gray-200"
                  placeholder="Username"
                ></input>
              </>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-blue-500 border px-3 font-semibold py-1 my-1 rounded-full border-gray-200"
              placeholder="Email"
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-blue-500 border px-3 font-semibold py-1 my-1 rounded-full border-gray-200"
              placeholder="Password"
            ></input>
            <button className="bg-[#1D9BF0] px-4 py-1 rounded-full my-4 font-bold text-lg text-white border-none">
              {isLogin ? "Login" : "Create account"}
            </button>

            <h1>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="cursor-pointer text-blue-600 font-bold"
                onClick={loginSignupHandler}
              >
                {isLogin ? "Register" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}
