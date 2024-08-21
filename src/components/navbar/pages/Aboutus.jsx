import React from 'react'
import './Aboutus.css'


function Aboutus() {
    return (
        <div className='aboutus'>
            <h1>About Us</h1>
            <div className='video-container'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/PdAn5EPsPe4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="production-team">
                <h1>SAG-AFTRA  production foundation team</h1>
                <p>
                    Executive Director-
                    Cyd Wilson
                    Chief Operating Officer-
                    Charlotte Wells
                    National Director of Performers Programs/Storyline Online Executive Producer-
                    Rochelle Rose
                    Director of Communications/Storyline Online Producer-
                    Caroline O’Connor
                    Senior Graphic Designer-
                    Julia Avanessians
                    Operations Manager-
                    Danny Zeff
                </p>
                <li><a href="production credits">Click here for production credits</a></li>

            </div>
            <div className="about">
                <p>
                    The SAG-AFTRA Foundation’s two-time Emmy®-nominated and award-winning children’s literacy website, Storyline Online®, streams videos featuring celebrated actors reading children’s books alongside creatively produced illustrations. Readers include Oprah Winfrey, Chris Pine, Rosario Dawson, Viola Davis, Terry Crews, Connie Britton, John Lithgow, Jennifer Garner, Betty White and dozens more.

                    Reading aloud to children has been shown to improve reading, writing and communication skills, logical thinking and concentration, and general academic aptitude, as well as inspire a lifelong love of reading. Teachers use Storyline Online in their classrooms, and doctors and nurses play Storyline Online in children’s hospitals.

                    Storyline Online is available 24 hours a day for children, parents, caregivers and educators worldwide. Each book includes supplemental curriculum developed by a credentialed elementary educator, aiming to strengthen comprehension and verbal and written skills for English-language learners.

                    Storyline Online is a program of the SAG-AFTRA Foundation. The Foundation is a nonprofit organization that relies entirely on gifts, grants and donations to fund Storyline Online and produce all of its videos.

                    You can help the SAG-AFTRA Foundation create more Storyline Online videos and new content, so that we can read to millions more children every month. By giving a gift to Storyline Online, you can help advance children’s literacy, and improve children’s lives. Your support makes a world of difference.
                </p>
                <button className='button'>GIVE TODAY</button>
            </div>
            <div className="last">
                <h1>Make Your Company a Part of Our Story.</h1>
                <p>Is your company committed to inspiring and elevating the next generation?

                    Become a Storyline Online Corporate Sponsor. For more information about sponsoring Storyline Online please email sponsorship@sagaftra.foundation.</p>
            </div>




        </div>

    )
}

export default Aboutus