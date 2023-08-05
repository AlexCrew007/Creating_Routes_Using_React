import { NavLink, useNavigate } from "react-router-dom";

function Source(){
    const navigate = useNavigate()
    const clickHandler=()=>{
        navigate('/about')
    }
    const backHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>
                This Is Source Page
            </h1>
            <NavLink to='/'>Home</NavLink>
            <button onClick={clickHandler}>About</button>
            <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default Source