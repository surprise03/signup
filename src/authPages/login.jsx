import react, { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();
        const query=new URLSearchParams(loginData).toString();
        const res=await fetch(`https://gamy-furry-eagle.glitch.me/users?${query}`);
        const data=await res.json();
        if (data.length > 0) {
            // alert('Login successful!');
            navigate('/Success')
            // You could save user info to localStorage here
          } else {
            alert('Invalid credentials');
          }
        console.log(data)
        
        console.log(query)
    }
    const handleChange=(e)=>{
        setLoginData({...FormData,[e.target.name]:e.target.value})
       
    }
    return (<>


        <form className="signup" onSubmit={handleLogin} >
            <h1>login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="enter your male" onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="enter your password"  onChange={handleChange}/>
            <button type="submit" >Login</button>
        </form>
    </>)
}
export default Login