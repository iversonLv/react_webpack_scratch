import PropTypes from 'prop-types'
import React from 'react'

const Hello = ({firstname, lastName}) => {
	const [name, setName] = React.useState(
		window.localStorage.getItem('name') || ''
	)
	React.useEffect(() => {
		window.localStorage.setItem('name', name)
	}, [name])
	return (
		<>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			Hello {firstname} - {lastName}
			{name}
		</>
	)
}

Hello.propTypes = {
	firstname: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
}

export default Hello
