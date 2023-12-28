import React from 'react'
import './News.css'

// assets
import img1 from '../assets/ItTech.jpg'
import img2 from '../assets/implementation.jpg'
import img3 from '../assets/Drone.jpeg'
import img4 from '../assets/laptop.jpg'

export default function News() {
    return (
        <div className='news'>
            <div className='main-title'>
                ПУБЛИКАЦИИ
            </div>
            <div className='container'>
                <div className='grid-horizontal'>
                    <div className='item-post'>
                        <div className='article-image'>
                            <img src={img1} height='300px' width='300px' />
                        </div>
                        <div className='article-wrapper white'>
                            <div className='date'>
                                12.18.2023
                            </div>
                            <h5 className='title'>
                                Внедрение в Ассоциацию IT
                            </h5>
                            <a className='read-more' href='#'>
                                Подробнее<span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className='item-post'>
                        <div className='article-wrapper blue'>
                            <div className='date'>
                                12.18.2023
                            </div>
                            <h5 className='title'>
                                Внедрение Системы Управления Безопасностью Полетов
                            </h5>
                            <a className='read-more' href='#'>
                                Подробнее<span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                        <div className='article-image'>
                            <img src={img2} height='300px' width='300px' />
                        </div>
                    </div>
                </div>
                <div className='grid-vertical'>
                    <div className='item-post'>
                        <div className='article-image'>
                            <img src={img3} height='300px' width='300px' />
                        </div>
                        <div className='article-wrapper white'>
                            <div className='date'>
                                12.18.2023
                            </div>
                            <h5 className='title'>
                                Наши Дроны
                            </h5>
                            <a className='read-more' href='#'>
                                Подробнее<span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className='item-feature'>
                        <div className='article-image'>
                            <img src={img4} height='600px' width='300px' />
                            <div className='date'>
                                12.18.2023
                            </div>
                            <h5 className='title'>
                                Образовательная платформа
                            </h5>
                            <a className='read-more' href='#'>
                                Подробнее<span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
