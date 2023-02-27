import React from 'react'


const SearchInput = ({setPokeSearch, setOptionType}) => {
    
    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.search.value.trim().toLowerCase())
        setOptionType("All")
        e.target.search.value = ""
            
    } 



  return (
    <form className='pokedex__search' onSubmit={handleSubmit}>
        <input className='pokedex__search_input' type="text" id='search'/>
        <button className='pokedex__search_btn'>Search</button>
    </form>
  )
}

export default SearchInput