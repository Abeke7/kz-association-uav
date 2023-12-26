import React from 'react';
import './Header.css';

// samples
import videobg1 from '../assets/video1.mp4'
import videobg2 from '../assets/video2.mp4'
import logo from '../logo.svg';

export default function header() {
    return (
        <div className='header'>
            
            <video className='video'
                src={videobg1}
                autoPlay
                loop
                muted
            />
            {/* <video className='video'
                src={videobg1}
                autoPlay
                loop
                muted
            /> */}


            <div className='logo'>
                <a>
                    <img src={logo} />
                </a>
            </div>
            <div className='top-navbar'>
                <div className='navbar'>
                    <a href='#'>О нас</a>
                    <a href='#'>Новости</a>
                    <a href='#'>Контакты</a>
                </div>
            </div>
            <div className='low-navbar'>
                <div className='navbar'>
                    <a href='#'>Главная</a>
                    <a href='#'>Мероприятия</a>
                    <a href='#'>Дроны</a>
                    <a href='#'>Контакты</a>
                    <div class="animation start-home"></div>
                </div>
            </div>
        </div>
    )
}
