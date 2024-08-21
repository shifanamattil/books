import React from 'react'
import {  FaInstagram, FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import './Subscribe.css';

function Subscribe() {
    return (
        <div className='subscribe'>
            <h2>Stay Informed </h2>

            <h4>Sign up for our email updates</h4>
            <div className="inputemail">
                <input type="email" placeholder='Email Id' />
                <button className='btn'>
                    Subscribe
                </button>

            </div>
            <div className="follow">
                <p>Follow Us:</p>
                <li className='social-icons'>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookSquare />
                    </a>
                </li>
            </div>
            <button className='dntbtn'>Donate</button>
        </div>
    )
}

export default Subscribe