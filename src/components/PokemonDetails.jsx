import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";


const PokemonDetails = () => {

  const {name} = useParams()

  const [pokemon, setPokemon] = useState()
  const [evolutionChain, setEvolutionChain] = useState()
  const [chain, setChain] = useState()

  useEffect(() => {
  
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios
    .get(URL)
    .then(res => {
      setPokemon(res.data),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then(res =>{
        setEvolutionChain(res.data.evolution_chain.url),
        axios.get(evolutionChain)
        .then(res => {  
            setChain(res.data.chain.evolves_to[0].species.name)
        }) 
      })
      .catch(err => console.log(err))
      
    }
    )
    .catch(err =>console.log(err))
    
  }, [evolutionChain])
  
  
const movesArr = pokemon?.moves
const limitedMoves = movesArr?.slice(0,6)






  

  return (
    <article className="pokemon__article">
      <div className="pokemon__article-card">
      <img  className="pokemon__article-img" src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />

     
      <h1>{pokemon?.name}</h1>
      <h2>ID: {pokemon?.id}</h2>
      <h2>Height: {pokemon?.height}</h2>
      <h2>Weight: {pokemon?.weight}</h2>
      <ul className="pokemon__article_list">
        <div className="pokemon__abilities_container">
          Abilities:
          {
            pokemon?.abilities.map(abilitie =>(
               <li key={abilitie.ability.url}> {abilitie.ability.name}</li>
            ))
          }

        </div>
      <div className="pokemon__type_container">
        Type:
          {
            pokemon?.types.map(type =>(
              <li key={type.type.url}>{type.type.name}</li>
            ))
          }
      </div>
      <div  className="pokemon__movements_container">
        Moves:
           {
            limitedMoves?.map(move =>(
              
              <li key={move.move.url} move={move.move}>{move.move.name}</li>
            ))
           }
      </div>
      </ul>
      </div>
      </article>
  )
}

export default PokemonDetails