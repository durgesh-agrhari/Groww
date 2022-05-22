import {Link} from 'react-router-dom'
import React from 'react'
import logo from '../../assets/groww.jpg'
import Search  from '../../assets/search.svg'
import Avatar from '../Avatar/Avater'
//import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
 
    var User = null

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width='200px' height='45px'/>
            </Link>
            <Link to='/#' className='nav-item nav-btn' >Explore</Link>
            <Link to='/#' className='nav-item nav-btn' >Tnvestments</Link>
            <Link to='/#' className='nav-item nav-btn' >Mutual Funds</Link>
            <Link to='/#' className='nav-item nav-btn' >Card</Link>
            <form>
                <input type="text" placeholder='Search'/>
                <img src={Search} alt="Search" width="18" className='search-icon' />
            </form>

            { User === null?
               <Link to='/Auth' className='nav-item nav-links' >Lohin</Link>:
               < >
                 <Avatar backgroundColor='#009dff' px="0px" py="7px" borderRadius="50%"> <Link to='/' className='pro' style={{color:"white", textDecoration:"none"}} >M</Link> </Avatar>
                 <button className='nav-item nav-links'>Log Out</button>
               </>
            }

        </div>
    </nav>
  )
}

export default Navbar 