import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyPriofile } from "../redux/userSlice";

const useGetProfile =  (id) =>{
    const dispatch = useDispatch()
    useEffect(() => {
      const fetchMyProfile = async () => {
          try {
              const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                  withCredentials:true,
              })
              dispatch(getMyPriofile(res.data.user))
          } catch (error) {
              console.log(error);
              
          }
      } 
      fetchMyProfile();
    }, [id])
    
} 

export default useGetProfile;