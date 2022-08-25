import React from 'react'
import { Link } from 'react-router-dom'
import { FaFireAlt, FaTv, FaSearch } from 'react-icons/fa'
import { BiMovie } from 'react-icons/bi'


const MainNav = () => {


    return (
        <nav className='mainnav'>
            <Link to='/' className='mainlinks'>
                <FaFireAlt />
                <h2>Trending</h2>
            </Link>
            <Link to='/movies' className='mainlinks'>
                <BiMovie />
                <h2>Movies</h2>
            </Link>
            <Link to='/shows' className='mainlinks'>
                <FaTv />
                <h2>TV Series</h2>
            </Link>
            <Link to='/search' className='mainlinks'>
                <FaSearch />
                <h2>Search</h2>
            </Link>
        </nav>
    )
}

export default MainNav