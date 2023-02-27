import React, { useState } from 'react'
import styled from "styled-components"
import { verifyRoute } from "../utils/APIRoutes";
import axios from "axios"
import {useNavigate} from "react-router-dom"


const Verify = () => {
    const navigate = useNavigate()
    const [code, setCode] = useState("")

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            await axios.post(verifyRoute, {code});
            navigate("/login")
        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <Container>
       <Wrapper>
            <Card>
                <Div>Verify</Div>
                <Small>Input OTP sent to your phone</Small>
                <input type="text" value={code} placeholder='OTP' onChange={(e)=> setCode(e.target.value)}/>
                <button onClick={handleSubmit}>Verify</button>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Verify

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px) ;
`
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Card = styled.form`
    width: 500px;
    min-height: 300px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.6);

    input {
    background-color: transparent;
    padding: 1rem;
    margin: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: grey;
    /* width: 100%; */
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
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
    @media Screen and (max-width: 1024px){
        width: 70%;
        min-height: 50%;
    }

`
const Div = styled.div`
    font-size: 30px;
    color: black;
    @media Screen and (max-width: 1024px){
        text-align: center;
    }
`
const Small = styled.div`
    font-size: 20px;
    color: rgba(153, 82, 208, 0.9);
    @media Screen and (max-width: 1024px){
        text-align: center;
    }
`