import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Rootfile() {
    return (
        <div>
            <div className='navbar'>

                <img src="" alt="" className='logo' />
                <ul>
                    <li className='storyline'>Storyline Online</li>
                </ul>

                <ul><Link className='aboutus' to={'/about'}>About Us</Link></ul>
                <ul><Link className='allbooks' to={'/allbooks'}>All Books</Link></ul>
                <ul><Link className='awards' to={'/awards'}>Awards</Link></ul>
                <ul> <Link className='sbscribe' to={'/subscribe'}>Subscribe</Link></ul>

                <div className="searchbox">
                    <input type="text" placeholder='Search' />
                    <CiSearch />


                </div>
                <ul>
                    <Link className='login' to={'/login'}>login</Link>
                </ul>



            </div>


        </div>
    )
}

export default Rootfile