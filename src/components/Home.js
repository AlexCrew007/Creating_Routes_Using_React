import React from "react"
import { NavLink, useNavigate } from "react-router-dom"


function Home(){
    const navigate = useNavigate();
    const clickHandler=()=>{
        navigate("/source")
    }
    const backHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>This IS Home Page</h1> 
            <NavLink to='/about'>About</NavLink>
            <button onClick={clickHandler}>Source</button>
            <button onClick={backHandler}>Back</button>
        </div>
          
    )
}

export default Home