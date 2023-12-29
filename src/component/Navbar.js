import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../logo.svg';



export default function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

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



            <div ref={navRef} className='low-navbar'>
                <div className='nav'>
                    <a href='/'>Главная</a>
                    <a href='#'>Публикации</a>
                    <a href='#'>Дроны</a>
                    <a href='#'>Образовательная платформа</a>
                    <div class="animation start-home"></div>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                </div>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>



        </div>
    )
}
