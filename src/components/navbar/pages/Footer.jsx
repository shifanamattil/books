import React from 'react';
import './Footer.css';
import { FaGooglePlay, FaAppStoreIos, FaChrome, FaInstagram, FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>

            <ul>
                <ul><Link className='comnts' to={'/comments'}>Comments/Quistions</Link></ul>
                <div ><ul><Link className='free'>    bvjhvhvhvkj                     </Link></ul></div>
                <ul><Link className='prvacypolicy' to={'/privacypolicy'}>Privacy Policy</Link></ul>
                <div ><ul><Link  className='free'>  bvhgvgffdrdrsres </Link></ul></div>



                <ul><li className='sag'>
                    <p>SAG-AFTRA FOUNDATION</p>
                    <p>@ 2024 SAG-AFTRA Foundation. All rights reserved!</p>
                </li>
                </ul>
                <div ><ul><Link  className='free'>jn jnfbvjhfbv</Link></ul></div>
                <ul> <li className='social-icons'>
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
                </ul>
                <div ><ul><Link  className='free'>  bvhgvgff </Link></ul></div>

                <ul> <li className='apps'>
                    <p>Download our free App!</p>
                    <div className='app-icons'>
                        <FaGooglePlay title="Google Play" />
                        <FaAppStoreIos title="App Store" />
                        <FaChrome title="Chrome Web Store" />
                    </div>
                </li>
                </ul>
            </ul>
        </div>
    );
}

export default Footer;













// import React from 'react'
// import './Footer.css'
// import { FaGooglePlay } from "react-icons/fa";
// import { FaAppStoreIos } from "react-icons/fa";
// import { FaChrome } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";



// const Footer = () => {
//     return (
//         <div className='footer'>
//             <ul>

//                 <li>Comments/Questions</li>
//                 <li>Privacy policy</li>
//                 <li className='apps'>Download our free App!
//                 <FaGooglePlay />
//                 <FaAppStoreIos />
//                 <FaChrome />
//                 </li>
//                 <li className='sag'> <p>SAG-AFTRA FOUNDATION</p>
//                 <p>@ 2024 sag aftra foundation.All rights reserved!</p></li>
//                 <li><FaSquareInstagram /></li>
//                 <li><FaYoutube /></li>
//                 <li><FaFacebookSquare /></li>
//             </ul>
{/* <ul>
            <div className='apps'>
                <li>Download our free App!</li>
                <FaGooglePlay />
                <FaAppStoreIos />
                <FaChrome />

                

                




            </div>
            </ul> */}


{/* <ul>
            <div className="sag">
                <p>SAG-AFTRA FOUNDATION</p>
                <p>@ 2024 sag aftra foundation.All rights reserved!</p>
            </div>

            </ul> */}
{/* <ul>
                <li><FaSquareInstagram /></li>
                <li><FaYoutube /></li>
                <li><FaFacebookSquare /></li>

            </ul> */}








//         </div>
//     )
// }

// export default Footer