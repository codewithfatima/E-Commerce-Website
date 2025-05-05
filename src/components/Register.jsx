import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Register = () => {
  const [username , setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError('');

    // if(password !== confirmPass){
    //   setError('Passwords does not match');
    //   toast.error('Password do not match', {position:'top-right'});
    //   return;
    // }
    try{
      const response = await fetch('http://localhost:8070/auth/signup', {
        method : 'POST',
        headers:{
          'Content-type' : 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
          // confirmPass,
        }),
      })

      const data = await response.json();

      if(data.success){
        toast.success('Registered Successfully...!',{
        position: 'top-right',
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(data.message || 'Registration failed');
      toast.error(data.message || 'Registration failed', {
        position: 'top-right',
      });
    }
  } catch (err) {
    console.error(err);
    setError('Something went wrong');
    toast.error('Something went wrong. Please try again.', {
      position: 'top-right',
    });
  }
  }


  return (
   <>
      <div className="profile">
      <div className="login-container">
        <h4>SignUp</h4>

        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            id="password"
            name="password"
            placeholder='Email'
            value={email}
          onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder='passowrd'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
         
         <input
            type="password"
            id="password"
            name="password"
            placeholder='Retype-passowrd'
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
         
          <button >SignUp</button>

          <div>
            {error && <p className="error">{error}</p>}
            </div>
        

          <div>
            <p>Already have any account? <Link to='/login'>login</Link></p>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default Register