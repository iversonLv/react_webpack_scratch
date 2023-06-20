import React from 'react'
import './App.scss'

import {RouterProvider} from 'react-router-dom'
import Routers from './routers'

const App = () => (
	<div>
		<h1>Hi, welcome</h1>
		<RouterProvider router={Routers} />
	</div>
)

export default App
