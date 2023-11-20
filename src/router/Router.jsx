import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Home  from '../views/Home'
import  Pokemones  from '../views/Pokemones'
import  NotFound  from '../views/NotFound'
import PokemonCard from '../components/PokemonCard'


const Router = () => {

    return (

            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/pokemones' element={ <Pokemones /> } />
                <Route path='/pokemones/:id' element={ <PokemonCard /> } />
                <Route path='*' element={<NotFound />} />
            </Routes>

    )
}

export default Router