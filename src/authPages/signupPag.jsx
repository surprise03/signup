import { useState } from "react"
import { useNavigate } from 'react-router-dom';
function SignUP(){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        gender:"",
        password:"",
        confirmPasword:""

    })
    const navigate = useNavigate();
    
  const handleSignup= async (e)=>{
    e.preventDefault();
    const email =await fetch(`https://gamy-furry-eagle.glitch.me/users?email=${formData.email}`)
    
    console.log(formData.email
      
    )
    const existingUsers = await email.json(); 
    console.log(existingUsers)

    if (existingUsers.length > 0) {
      alert('Email already exists. Please use another one.');
      navigate("/login")
      return;
    }
  
    const res = await fetch('https://gamy-furry-eagle.glitch.me/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      alert('User registered successfully!');
      navigate('/login');
    } else {
      alert('Failed to register user.');
    }
    
  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    
      
  }
  return (<>
  
    <form onSubmit={handleSignup} className='signup'>
      <h1>Register Form</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder='enter your name' onChange={handleChange} required/>
      <label htmlFor="email">Email </label>
      <input type="text" name="email" placeholder='enter your email' onChange={handleChange} required/>
      <label htmlFor="genderData">Gender</label>
      <select name="gender" id="" onChange={handleChange} required>
        <option value="">select</option>
        <option value="male">male</option>
        <option value="female">Female</option>
      </select>
     
      <label htmlFor="password">Password</label>
      <input type="text" name="password" placeholder='enter new password' onChange={handleChange} required/>
      <label htmlFor="confirmPassword">confirm Password</label>
      <input type="text" name="confirmPasword" id=""  placeholder='confirm password' onChange={handleChange} required/>
      <button type='submit'>Register!</button>
    </form>

  </>)

}
export default SignUP