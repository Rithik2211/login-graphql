import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface LoginProps {
    email: string;
    password:  string;
  };
  
const initialLoginValue: LoginProps = {
    email : '',
    password : ''
}
  

const Login = () => {
    const [loginData, setLoginData] = useState<LoginProps>(initialLoginValue);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register')
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })
    }

    const handleLoginSubmit = async(e : FormEvent) => {
        e.preventDefault();
        try{
            // await loginUser(loginData.email, loginData.password );
            setMessage('');
        }
        catch(err){
            console.error("Please provide a Valid Email and Password", err);
            setMessage("Please provide a Valid Email and Password");
        }
    }

  return (
    <div className='container max-w-screen-2xl w-full p-6 '>
        <div className='min-w-[250px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
            <form onSubmit={handleLoginSubmit} className='flex flex-col gap-4 items-start w-full'>
                <h2 className='text-2xl text-text font-semibold'>Please Login</h2>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Email</label>
                    <input 
                        autoComplete="true"
                        type="email" id="email" name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter Email Adress"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Password</label>
                    <input 
                        type="password" name="passowrd" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        autoComplete="true"
                        placeholder="Enter Password" 
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {
                  message &&  <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <button type="submit" className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'>Login</button>
                <h3 className='text-xs text-text font-medium py-3'> Haven't an account? Please <span className='text-blue-500 cursor-pointer' onClick={handleClick}>Register</span></h3>
            </form>
            <div className='flex flex-col gap-2 w-full'>
                <h3 className='text-xs text-text font-normal py-2'> ©2025 All rights reserved</h3>
            </div>
        </div>
    </div>
  )
}

export default Login;