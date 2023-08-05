import { NavLink, useNavigate } from "react-router-dom"

function About(){
    const navigate = useNavigate();
    const clickHandler=()=>{
        navigate('/');
    }
    const backHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>
                This Is About Page
            </h1>
            <NavLink to='/source'>Source</NavLink>
            <button onClick={clickHandler}>Home</button>
            <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default About