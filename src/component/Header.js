import React, { useState, useRef } from 'react';
import './Header.css';

// samples
import videobg from '../assets/video.mp4'
import picture1 from '../assets/Academy of Civil Aviation.png'
import picture2 from '../assets/AgroDrone.png'
import picture3 from '../assets/Ministry of Transport and Communications.png'
import picture4 from '../assets/ScTech.png'
import picture5 from '../assets/Taldykurgan Polytechnic College.png'

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const headerRef = useRef();

    const handleScroll = () => {
        const newPosition = headerRef.current.getBoundingClientRect().bottom;
        setScrollPosition(newPosition);
    };

    const scrollToNextSection = () => {
        window.scrollTo({
            top: scrollPosition + window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className='header' ref={headerRef} onScroll={handleScroll}>

            {/* background-video */}
            <video className='video' src={videobg} autoPlay loop muted />

            <div className='main-title'>
                КАЗАХСТАНСКАЯ АССОЦИАЦИЯ
                <br />
                БПЛА
            </div>

            {/* mouse icon */}
            {/* КНОПКА ДЛЯ ПРОКРУТКИ */}
            <a href='#' className='mouse-link' onClick={scrollToNextSection}>
                <span className="mouse-icon material-symbols-outlined">
                    mouse
                </span>
            </a>

            {/* partners */}
            <div className='partners'>
                <a href='https://thpc.edu.kz/'>
                    <img src={picture5} height="70px" />
                    <p>Толдыкорганский политехнический колледж</p>
                </a>
                <a href='#'>
                    <img src={picture4} height="45px" />
                </a>
                <a href='https://www.gov.kz/memleket/entities/transport?lang=ru&ysclid=lqnn33thl2644220062'>
                    <img src={picture3} height="60px" />
                    <p>Министерство транспорта РК</p>
                </a>
                <a href='https://caa.edu.kz/'>
                    <img src={picture1} height="60px" />
                    <p>Академия гражданской авиации</p>
                </a>
                <a href='https://agro-drone.kz/'>
                    <img src={picture2} height="60px" />
                    <p>Agro Drone</p>
                </a>
                <a href='#'>
                    <p>ТОО «Славко» Авиакомпания</p>
                </a>
                <a href='https://www.gov.kz/memleket/entities/aviation?lang=ru&ysclid=lqnn4l1n2k268155452'>
                    <img src={picture3} height="60px" />
                    <p>Комитет гражданской авиации</p>
                </a>
            </div>
        </div>
    );
}
