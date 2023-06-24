import React from 'react'
import './App.scss'

import {RouterProvider} from 'react-router-dom'
import Routers from './routers'
import LOGO from './assets/images/logo.svg'

const App = () => (
	<div>
		<img src={LOGO} alt="logo" />
		<h1>Hi, welcome</h1>
		<RouterProvider router={Routers} />
		<input type="text" placeholder="fill the input please" />
	</div>
)

export default App
