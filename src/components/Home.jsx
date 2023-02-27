import React from 'react'
import { useDispatch } from 'react-redux'
import { changeName } from '../store/slices/user.slice'
import { useNavigate } from 'react-router-dom'
import pokedexmain from '../assets/pokedexmain.png'



const Home = () => {

 const navigate = useNavigate()

  const dispatch = useDispatch()   

  const handleSubmit = e => {
      e.preventDefault()
      const inputValue = e.target.name.value.trim()
      const inputPass = e.target.password.value

      if(!inputPass || !inputValue){
        alert("Please type your user and password")
      }

      if(inputValue.length !== 0 && inputPass){
        dispatch(changeName(inputValue))
        navigate('/pokedex')
      }
      e.target.name.value = ''
  }

  return (
    <form className='home' onSubmit={handleSubmit}>
      <img className='home__img' src={pokedexmain} alt="" />
      <div className='home__title'>Hi, trainer!</div>
      <div className='home__form'>
      <input type="text" placeholder='enter your name' id="name" className='home__input'/>
      <input type="password" placeholder='enter your password' id='password' className='home__input' />
      <button className='home__btn'>Let's Go!</button>
      </div>
    </form>

  )
}

export default Home