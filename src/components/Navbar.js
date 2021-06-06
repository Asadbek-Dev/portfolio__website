import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../img/photo_2021-04-24_21-40-16.jpg'

const Navbar = () => {
    return (
        <div className='NavBar'>
            <nav className='nav'>
                <div className='profile'>
                    <img src={avatar} alt='Yoq'/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/about' exact activeClassName='active'>
                            About
                        </NavLink>
                        <NavLink to='/portfolios' exact activeClassName='active'>
                            Portfolios
                        </NavLink>
                        <NavLink to='/blogs' exact activeClassName='active'>
                            Blogs
                        </NavLink>
                        <NavLink to='/contact' exact activeClassName='active'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <footer className='footer'>
                <p>@2021 Lorem, ipsum</p>
            </footer>
        </div>
    )
}

export default Navbar
