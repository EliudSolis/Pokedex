import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import SelecType from './SelecType'
import Pagination from './Pagination'





const Pokedex = () => {

  let user = useSelector(state => state.userSlice)


  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState("All")
  const [currentPage, setCurrentPage] = useState(20);
  const [cardsPerPage, setCardsPerPage] = useState(20)


  console.log(cardsPerPage)



  useEffect(() => {
    let URL
    if (optionType !== "All") {
      URL = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(URL)
        .then(res => {
          console.log(res)
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results: arr })
        })

        .catch(err => console.log(err))

    } else if (pokeSearch) {
      URL = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [
          {
            url: URL
          }
        ]
      }
      setPokemons(obj)



    } else {
      URL = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${currentPage}`


      axios.get(URL)
        .then(res => setPokemons(res.data))

        .catch(err => console.log(err))
    }

  }, [pokeSearch, optionType, currentPage])


  const indexOfLastCard = cardsPerPage * pokemons?.results.length
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const totalPages = Math.floor(pokemons?.count / cardsPerPage)




  const nexPag = () => {
    setCurrentPage(currentPage + 20)
  }


  const prevPag = () => {
    setCurrentPage(currentPage - 20)
  }

  const mainPage = () => {
    setCurrentPage(20)
  }


  const hideShow = (currentPage) => {

    if (currentPage == 20) {
      return "none"
    } else {
      return ""
    }

  }

  const obj = {
    display: hideShow(currentPage)
  }

 

  return (

    <div className='pokedex'>
      <h1 className='pokedex__title'>Welcome, {user}!</h1>
      <div className="pokedex__filters">
      <SearchInput setOptionType={setOptionType} setPokeSearch={setPokeSearch} />
      <SelecType setPokeSearch={setPokeSearch} setOptionType={setOptionType} />
      </div>
      <div className='card__container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard key={pokemon.url} url={pokemon.url} />
          ))
        }
      </div>
      <div className='pokedex__btns'>
        <button onClick={mainPage} className="pokedex__btn-main" style={obj}>Main page</button>
        <button onClick={prevPag} className="pokedex__btn_prev" style={obj}>Prev Page</button>
        <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
        <button onClick={nexPag}>Next Page</button>
      </div>
    </div>
  )
}

export default Pokedex