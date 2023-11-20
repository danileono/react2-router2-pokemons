import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

const setActiveClass = ({isActive})=> isActive ? "active-dani" : ""


    return (
        <div className='menu-navegacion'>
            <img src='/pokelocation.svg'></img>
            <nav>
                <NavLink to="/" className={setActiveClass} >Home  </NavLink>
                <NavLink to="/pokemones" className={setActiveClass} >Pokemon</NavLink>
            </nav>
        </div>
    )
}

export default NavBar