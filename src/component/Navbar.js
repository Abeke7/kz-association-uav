import React from 'react'
import './Navbar.css'
import logo from '../logo.svg';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='top-navbar'>
                <div className='nav'>

                    <a href='#'>О нас</a>
                    <a href='#'>Контакты</a>
                </div>
            </div>
            <div className='logo'>
                    <a href='/'>
                        <img src={logo} />
                    </a>
                </div>
            <div className='low-navbar'>
                    <div className='nav'>
                        <a href='/'>Главная</a>
                        <a href='#'>Публикации</a>
                        <a href='#'>Дроны</a>
                        <a href='#'>Образовательная платформа</a>
                        <div class="animation start-home"></div>
                    </div>
                </div>
        </div>
    )
}
