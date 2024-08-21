import React from 'react'
import './Comments.css';

function Comments() {
  return (
    <div className='comnts'>
        {/* <ul className='questions'>
        
           <li> <li>How much does a Storyline Online subscription cost?</li>
            <li>YouTube is blocked from our school, how can we watch?</li>
            <li>How can I submit my book to be read for Storyline Online?</li>
            <li>Can I bookmark my preferred media player?</li>
            <li>How do I sort the books by grade level?</li>
            <li>When are more books coming?</li>
            <li>Is there a Storyline Online app?</li>
            <li>Where can I download a flyer about Storyline Online?</li>
            <li>May I suggest a book or reader?</li>
            <li>How do I turn on closed captioning or subtitles?</li>
            <li>How come the page is loading and the video is not showing up?</li>
            <li>why caWn’t I hear the videos when using the website?</li>
            <li>Why can't I hear the videos when using the iOS app?</li>
            <li>Are there books available in other languages?</li>
            <li>I can't find (insert book) listed on the homepage. Is there an index?</li>
            <li>I need to make sure children can't navigate away from StorylineOnline.net</li>
            <li>Do you have a question that was not asked/answered above?</li></li>

        </ul> */}
        <div className="heading">
            <h1>Have More Quiestions?</h1>
            <h4>Please email us and we’ll post the most common ones here.</h4>
        </div>
        <div className="container">
        <input type="name" placeholder='Name' />
        <input type="email" placeholder='Email Id' />
        <input type="password" placeholder='Password' />
        <textarea name="message" id="message" rows={4} placeholder='Message'></textarea>
        <button className='btn'> Submit</button>
        </div>
        

        
        

    </div>
  )
}

export default Comments