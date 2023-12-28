import React from 'react';
import './Main.css'

// components
import Header from './Header.js';
import News from './News.js';




export default function Main() {
    return (
        <div className='main'>
            <div className='section-1'><Header /></div>
            <div className='section-2'><News /></div>



            <div className='section-3'>
                <div className='footer'>
                    <div className='section'>
                        <div className='logo'>
                            <img src='#' />
                            КАЗАХСТАНСКАЯ АССОЦИАЦИЯ БПЛА
                        </div>
                        <div className='navbar'>
                            
                        </div>
                    </div>


                    <div className='navbar'>
                        <ul>
                            <li></li>
                            <li><a href='#'></a></li>
                            <li><a href='#'></a></li>
                            <li><a href='#'></a></li>
                            <li><a href='#'></a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='section-4'></div>
        </div>
    );
}