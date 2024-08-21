import React, { useState, useEffect } from 'react'
import { API_URL } from './Api';
import axios from 'axios';
import './Booklist.css';
import { useNavigate } from 'react-router-dom';

function Booklist() {
  const [books, setBkooks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        // console.log(res.data);
        setBkooks(res.data);

      })
      .catch((err) => console.log(err));

  }, []);




  return (

    <div className='book-list'>
      {books.map((book) => (
        <div key={book.id}>
          <div><h2>{book.title}</h2></div>
          <div><img src={book.image_url} alt="" onClick={() => navigate(`/books/${book.id}`)} /></div>


        </div>

      ))}

    </div>
  )
}

export default Booklist