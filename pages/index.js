import Head from 'next/head'
import Header from '../components/Header'
import Home from '../components/Content'
import Sidebar from '../components/Sidebar'

import React, {useState} from 'react'


export default function App() {
	const [burger, setBurger] = useState(true);
	const changeBurger = () => {
		setBurger(!burger)
	}
	
   return (
    <div className="App">
      <Header /><Sidebar burger={burger} changeBurger={changeBurger} /><Home />
    </div>
)
}
