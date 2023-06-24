import React from 'react'
import {Link} from 'react-router-dom'

import sImage from './assets/images/s.jpg'

const Home = () => (
	<>
		<img src={sImage} alt="a" width="150" />
		Home goes here
		<Link to="/hello">Go to Hello</Link>
	</>
)

export default Home
