import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className='container max-w-screen-2xl w-full p-6 '>
       Welcome to the Home page Screen
        <div className='flex flex-col justify-center items-center text-center gap-4 w-full'>
            <h1 className='md:text-4xl text-3xl text-text font-medium mb-7'>New Releases This Week</h1>
            <p className='text-text text-[15px] w-[400px] py-2 leading-relaxed '>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.</p>
            <button className='bg-button text-white px-10 py-2 rounded-[8px] text-sm' onClick={handleClick} >Login</button>
        </div>
       <h3 className='text-xl text-text font-medium py-3'> Haven't an account? Please <span className='text-blue-500 cursor-pointer' onClick={handleClick}>Login</span></h3>
    </div>
  )
}

export default HomeIntro