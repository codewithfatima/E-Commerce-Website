import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [currentState, setcurrentState] = useState('Sign Up')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
      <div className="profile">
        <div className="login-container">
            <h4>{currentState}</h4>

            <form onSubmit={handleSubmit}>
             {currentState === 'Login' ? '' : <input
                   type="text"
                    id="username"
                    name="username"
                    placeholder='Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /> }
              
                <input
                    type="email"
                    id="password"
                    name="password"
                    placeholder='Email'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
               
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='passowrd'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>

                <div>
                  <p>Forgot password?</p>
                  {
                    currentState === 'Login'
                    ? <p onClick={()=>setcurrentState('Sign Up')}>Create Account</p>
                    :<p onClick={()=>setcurrentState('Login')}>Login Here</p>
                  }
                </div>
                 <button>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
