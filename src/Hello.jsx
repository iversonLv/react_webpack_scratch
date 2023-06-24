import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

const Hello = ({firstname, lastName}) => {
	const [name, setName] = React.useState(
		window.localStorage.getItem('name') || ''
	)
	React.useEffect(() => {
		window.localStorage.setItem('name', name)
	}, [name])
	return (
		<>
			<Link to="/">Home</Link>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			Hello {firstname} - {lastName}
			update check whether it cache the bundle with hash
			{name}
		</>
	)
}

Hello.propTypes = {
	firstname: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
}

export default Hello
