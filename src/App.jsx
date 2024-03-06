import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Section from './components/Section'
import Product from './components/Product'

// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'
import Header from './components/Header'
import Motto from './components/Motto'

function App() {

  return (
    <div className='min-h-screen relative'>
      < Header />
      < Motto />
    </div>
  );
}

export default App;
