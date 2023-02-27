import React, {useEffect} from 'react'
import { getUser } from "../utils/APIRoutes";
import axios from "axios"

const Home = () => {

  const getUsers = async()=>{
    try{
      // const res  = await axios.get(getUser + `{}`);
      console.log(JSON.parse(localStorage.getItem("user")))
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home