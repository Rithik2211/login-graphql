import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <main className='w-full py-6 font-primary'>
        <Outlet />
      </main>
    </>
  )
}

export default App
