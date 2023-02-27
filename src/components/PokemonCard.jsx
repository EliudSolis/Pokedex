import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPoke from './StatPoke'
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState()
    const [colorUrl, setcolorUrl] = useState([])
    const [color, setColor] = useState()
   

    useEffect(() => {
     axios.get(url)
     .then(res => {
        setPokemon(res.data),
        setcolorUrl(pokemon?.species.url),
        
              axios.get(colorUrl)
        .then(res => setColor(res?.data.color.name))
        .catch(err => console.log(err))
             
    })
    .catch(err => alert("Pokemon not found"))

   

    
    }, [colorUrl])
 
    
 
    const handleClick = () =>{
        navigate(`/pokedex/${pokemon.name}`)
    }

   const navigate = useNavigate()

//    const getBackGroundColor = (URL) => {

//    }

const backGroundColor = {
    backgroundColor: `${color}`
}

const borderColor = {
    border: `4px solid ${color}`
}




    

  return (
    <div className="card__deposit">
    <article className='card' style={borderColor} onClick={handleClick}>
        <header className='card__header' style={backGroundColor}>
            <img className='card__img' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>
        <section className="body">
            <h3 className='card__title'>{pokemon?.name}</h3>
            <ul className='card__types'>
            {
                pokemon?.types.map(slot => (
                    <li key={slot.type.url}> {slot.type.name} </li>
                    ))
                }
            </ul>

                <h4 className='card_id'>ID: {pokemon?.id}</h4>
        </section>
         <footer>
            <ul className='card__stats'>
                {
                    pokemon?.stats.map(stat =>(
                        <StatPoke 
                        key={stat.stat.name}
                        
                        infosStat={stat}
                        
                        />
                    ))
                }
            </ul>
         </footer>
    </article>
    </div>
  )
}

export default PokemonCard