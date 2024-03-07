import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Home from './components/views/Home'
import Header from './components/Header'

// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'

import Motto from './components/Motto'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className='min-h-screen relative'>
      < Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
