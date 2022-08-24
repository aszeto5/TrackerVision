import { Link } from 'react-router-dom';
import React from 'react'
import Auth from '../../utils/auth'

const Header = () => {
    const logout = event => {
        event.preventDefault()
        Auth.logout()
    }

    return (
        <header>
            <div>
                <Link to='/'>
                    <h1>TrackerVision</h1>
                </Link>
                <nav>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/profile' className='navlink'>Profile</Link>
                            <a href='/' onClick={logout} className='navlink'> Logout</a>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className='navlink'>Login</Link>
                            <Link to='/signup' className='navlink'>Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
};

export default Header;