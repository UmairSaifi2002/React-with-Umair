import React from 'react'

const card = (props) => {
  return (
    <div className='card'>
        <h1>Tittle of the  {props.tittle}</h1>
        <p>Description of the {props.tittle}</p>
    </div>
  )
}

export default card