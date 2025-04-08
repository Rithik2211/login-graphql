import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

interface LoginProps {
    username: string;
    email: string;
    password: string;
};
  
const initialLoginValue: LoginProps = {
    username: '',
    email: '',
    password: ''
}

const Login = () => {
    const [loginData, setLoginData] = useState<LoginProps>(initialLoginValue);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        onCompleted: (data) => {
          localStorage.setItem('token', data.login.token);
          localStorage.setItem('user', JSON.stringify(data.login.user));
          navigate('/home');
        },
        onError: (error) => {
          console.error("Login error:", error);
          setMessage(error.message || "Login failed. Please check your credentials.");
        }
    });

    const handleClick = () => {
        navigate('/signup')
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const fillTestCredentials = () => {
        setLoginData({
            username: 'testuser',
            email: 'test@gmail.com',
            password: '123456789'
        });
    }

    const handleLoginSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
          await loginUser({
            variables: {
              username: loginData.username,
              email: loginData.email,
              password: loginData.password
            }
          });
        } catch (err) {
          console.error("Login error:", err);
          setMessage("Please provide valid credentials");
        }
    }

    return (
        <div className='container max-w-screen-2xl w-full p-6'>
          <div className='min-w-[400px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
            <form onSubmit={handleLoginSubmit} className='flex flex-col gap-4 items-start w-full'>
              <h2 className='text-2xl text-text font-semibold'>Please Login</h2>
              <div className="md:col-span-5 flex flex-col items-start w-full">
                <label className='text-sm font-medium'>Username</label>
                <input
                  autoComplete="username"
                  type="text" 
                  id="username" 
                  name="username" 
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                  placeholder="Enter Username"
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="md:col-span-5 flex flex-col items-start w-full">
                <label className='text-sm font-medium'>Email</label>
                <input
                  autoComplete="email"
                  type="email" 
                  id="email" 
                  name="email" 
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                  placeholder="Enter Email Address"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="md:col-span-5 flex flex-col items-start w-full">
                <label className='text-sm font-medium'>Password</label>
                <input
                  type="password" 
                  name="password" 
                  id="password" 
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                  autoComplete="current-password"
                  placeholder="Enter Password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
              <div className="flex w-full justify-between">
                <button 
                  type="submit" 
                  className='bg-button text-white px-5 py-2 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                <button 
                  type="button"
                  onClick={fillTestCredentials}
                  className='bg-gray-200 text-gray-700 px-5 py-2 rounded-[8px] text-sm focus:outline-none'
                >
                  Use Test Credentials
                </button>
              </div>
              <h3 className='text-xs text-text font-medium py-3'> Haven't an account? Please <span className='text-blue-500 cursor-pointer' onClick={handleClick}>SignUp</span></h3>
            </form>
            <div className='flex flex-col gap-2 w-full'>
              <h3 className='text-xs text-text font-normal py-2'> ©2025 All rights reserved</h3>
            </div>
          </div>
        </div>
    )
}

export default Login;