import React, {Suspense, lazy} from 'react'
import {createHashRouter, Outlet} from 'react-router-dom'
import Home from './Home'

// lazy load
const Hello = lazy(() => import('./Hello'))

const Layout = () => (
	<>
		<header>abc</header>
		<main>
			<Outlet />
		</main>
		<footer>abc</footer>
	</>
)

export default createHashRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/hello',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Hello firstname="iverson" lastName="lv" />
					</Suspense>
				),
			},
		],
	},
])
