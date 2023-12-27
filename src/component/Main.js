import React from 'react';
import './Main.css'

// components
import Header from './Header.js';

// assets
import news1 from '../assets/news-1.png'
import pdf1 from '../assets/pdf1.pdf'

export default function Main() {
    return (
        <div className='main'>
            <div className='secrion'><Header /></div>
            <div className='secrion'>

                <div className='news'>

                    <div className='main-title'>
                        НОВОСТИ
                    </div>

                    <div className='container-box'>
                        <a href={pdf1} className='container'>
                            <img src={news1}/>
                            <p>
                                12/27/2023
                                <br />
                                Новый партнер в лице ТОО HQL ЖШС
                            </p>
                        </a>
                        <div className='container'>1</div>
                        <div className='container'>1</div>
                        <div className='container'>1</div>
                        <div className='container'>1</div>
                        <div className='container'>1</div>
                        <div className='container'>1</div>
                        <div className='container'>1</div>
                    </div>
                </div>

            </div>
            <div className='secrion'></div>
        </div>
    );
}