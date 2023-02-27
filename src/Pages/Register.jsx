import React,{useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

const Register = () => {
    const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    interest: "",
  });
  useEffect(() => {
    // if (localStorage.getItem(import.meta.env.VITE_REACT_APP_LOCALHOST_KEY)) {
    //   navigate("/");
    // }
  }, []);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { password, username, email, phoneNumber } = values;
    if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    }else if (email === "") {
        toast.error("Email is required.", toastOptions);
        return false;
    }else if (phoneNumber === "") {
        toast.error("phone Number is required", toastOptions);
        return false;
      } 
    else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }

    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      if (handleValidation()) {
        
        const { email, username, password, phoneNumber, interest } = values;
        const res = await axios.post(registerRoute, {
          username,
          email,
          password,
          phoneNumber,
          interest
        });
        
        if (res.status === false) {
          toast.error(res.msg, toastOptions);
          
        }
        if(res){
          navigate("/success");
        }
        // if (res.status === true) {
        //   localStorage.setItem(
        //     "user",
        //     JSON.stringify(res.data)
        //   );
        //   console.log(res.data)
          
        // }
        // console.log(username,
        //   email,
        //   password,
        //   phoneNumber,
        //   interest)
      }
      
    }catch(err){
      console.log(err.message)
    }
  };
  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            // type=""
            placeholder="phone number"
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <select onChange={(e) => handleChange(e)} name="interest">
            <option value=" ">---choose interest---</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Ice Hockey">Ice Hockey</option>
            <option value="Motor Sports">Motor Sports</option>
            <option value="Bandy">Bandy</option>
            <option value="Rugby">Rugby</option>
            <option value="Skiing">Skiing</option>
            <option value="Shooting">Shooting</option>
          </select>
            
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

export default Register

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  select {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: grey;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
      color: grey
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;