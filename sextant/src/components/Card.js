import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  )
}

export default Card