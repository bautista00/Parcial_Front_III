import React from 'react'


const Card = ({nombre, apellido}) => {
  return (
    <div>
        <h3>Bienvenido {nombre} {apellido} !</h3>
    </div>
  )
}

export default Card