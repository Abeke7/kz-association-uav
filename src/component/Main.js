import React, { useRef } from 'react';
import copy from 'clipboard-copy';
import './Main.css';

// components
import Header from './Header.js';
import News from './News.js';

// assets
import logo from '../logo.svg'

const CopyTextComponent = ({ text }) => {
    const textRef = useRef(null);

    const handleTextClick = () => {
        if (textRef.current) {
            copy(textRef.current.textContent);
            alert('Текст скопирован!');
        }
    };

    return (
        <p ref={textRef} onClick={handleTextClick} style={{ cursor: 'pointer' }}>
            {text}
        </p>
    );
};

export default function Main() {
    return (
        <div className='main'>
            <div className='section-1'>
                <Header />
            </div>
            <div className='section-2'>
                <News />
            </div>

            <div className='section-3'>
                <div className='footer'>
                    <div className='section'>
                        <div className='logo'>
                            <img src={logo} alt='Logo' width='135px' />
                            <div className='titles'>
                                <span className='post-title'>
                                    ОБЪЕДИНЕНИЕ ЮРИДИЧЕСКИХ ЛИЦ И ИНДИВИДУАЛЬНЫХ ПРЕДПРИНИМАТЕЛЕЙ
                                </span>
                                <span className='name'>
                                    КАЗАХСТАНСКАЯ АССОЦИАЦИЯ БПЛА
                                </span>
                            </div>
                        </div>
                        <div className='list-links'>
                            <ul>
                                <li><span class="material-symbols-outlined">phone_in_talk</span><CopyTextComponent text="+00000000000" /></li>
                                <li>
                                    <a href='#'><span class="material-symbols-outlined">mail</span>example@gmail.com</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">location_on</span>Республика Казахстана, г. Астана
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='section'>
                        <div className='list'>
                            <ul>
                                <li className='title'>БЫСТРЫЕ ССЫЛКИ</li>
                                <li>
                                    <a href='#'>Главная</a>
                                </li>
                                <li>
                                    <a href='#'>О нас</a>
                                </li>
                                <li>
                                    <a href='#'>Образовательная платформа</a>
                                </li>
                                <li>
                                    <a href='#'>Дроны</a>
                                </li>
                            </ul>
                        </div>
                        <form className='form-box'>
                            <div className='title'>
                                <h2>РАССЫЛКА</h2>
                                <p>
                                    Получайте последние новости на свой
                                    <br />
                                    почтовый ящик
                                </p>
                            </div>
                            <div className='form'>
                                <label>
                                    <input
                                        type="text"
                                        placeholder='Your email here'
                                    />
                                </label>
                                <button type="submit"><span class="material-symbols-outlined">send</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className='section-4'></div>
        </div>
    );
}
