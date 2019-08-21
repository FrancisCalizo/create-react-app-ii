import React from 'react'
import PropTypes from 'prop-types'

const Repo = ({repo}) => {
  return (
    <div className='card'>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  )
}

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default Repo
