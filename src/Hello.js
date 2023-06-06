import PropTypes from 'prop-types'
import React from "react";
const Hello = ({firstname, lastName}) => {
  return(
    <>
      Hello {firstname} - {lastName}
    </>
  )
}

Hello.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default Hello