import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch('http://localhost:8070/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        localStorage.setItem('token', data.jwtTo);

        toast.success('Login Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError(data.message);
        toast.error(data.message, {
          position: 'top-right',
        });
      }

    } catch (err) {
      setError('An error occurred during login.');
      console.error(err);
      toast.error('Login failed. Try again later.', {
        position: 'top-right',
      });
    }
  }


  return (
    <div className="profile">
      <div className="login-container">
        <h4>Login</h4>

        <form onSubmit={handleSubmit} >
          <input
            type="email"
            id="password"
            name="password"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder='passowrd'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>

          <div className='login-p'>
            <p >Forgot password?</p>

            <div>
            {error && <p className="error">{error}</p>}
            </div>
            <p>Don't have any account? <Link to='/register'>SignUp</Link></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
