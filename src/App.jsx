import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Home from './components/views/Home'
import Header from './components/Header'


// ABIs


// Config
import config from './config.json'

import Motto from './components/Motto'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './components/views/ProjectPage'
import { isWalletConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'



function App() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(async() => {
    await isWalletConnected()
    setLoaded(true)
  }, [])
  return (
    <div className='min-h-screen relative'>
      < Header />
      
        {loaded ? (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<ProjectPage/>} />
          </Routes>
        ) : null}
        
      

      <ToastContainer
        position = 'top-center'
        autoclose = {5000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default App;
