import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-between items-center max-w-7xl w-full'>
      <div className='absolute top-0'>
        <img src="/Books.svg" alt="error" className="w-full h-auto object-contain" />
      </div>
      <div className='flex flex-col items-center justify-between mt-[150px]'>
        <h1 className='text-[#FFCE1A] text-[228px]'>404</h1>
        <h3 className='text-[36px] text-text pb-[20px]'>Looks like you've got lost...</h3>
        <p className='text-[#0D0842] pb-[20px] text-[20px]'> The page you are looking for doesn't exit or has been moved.</p>
        <span className='text-[#FFCE1A] text-[22px] font-semibold cursor-pointer' onClick={() => handleClick()}>Go Home</span> 
      </div>
    </div>
  )
}

export default ErrorPage;