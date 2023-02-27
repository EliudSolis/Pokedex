
import React from 'react'

const StatPoke = ({infosStat}) => {

   
  

  return (
    <ul className='card__stats__info'>
        <h4 className='card__stat-title'>{infosStat.stat.name}</h4>
        <p className='card__stat-value'>{infosStat.base_stat}</p>
    </ul>
  )
}

export default StatPoke