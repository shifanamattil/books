import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from './pages/Api';
// import axios from 'axios';



const Navbar = () => {
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://example-data.draftbit.com/books?_limit=200')
    // axios.get(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setfilterData(data);
      })
      .catch(err => console.log(err))

  }, []);
  const handleFilter = (value) => {
    const res = filterData.filter(f => f.title.toLowerCase().includes(value))
    setData(res);
    if (value === "") {
      setData([])
    }
  }
  const handleClick = (bookId) => {
    navigate(`/books/${bookId}`)
  }
  return (
    <div className='navbar'>

      <ul>
        <li className='storyline'>Storyline Online</li>
      </ul>


      <ul><Link className='allbooks' to={'/allbooks'}>All Books</Link></ul>
      <ul><Link className='aboutus' to={'/about'}>About Us</Link></ul>
      <ul><Link className='awards' to={'/awards'}>Awards</Link></ul>
      <ul> <Link className='sbscribe' to={'/subscribe'}>Subscribe</Link></ul>

      <div className='search-top'>
        <div className="searchbox">
          <input type="text" placeholder='Search' className='title' onChange={e => handleFilter(e.target.value)} />
          <CiSearch />


        </div>
        <div className='search-result'>
          {data.map((d, i) => (
            <div key={i} onClick={() => handleClick(d.id)}>
              {d.title}
            </div>
          )

          )}
        </div>
      </div>
      <ul>
        <Link className='login' to={'/login'}>login</Link>
      </ul>



    </div>
  )
}

export default Navbar