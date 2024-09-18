
import React, { useEffect, useState } from 'react'
import { data } from '../assets/data/data'

const { redes } = data;
const cv = redes[2];

export default function NavBar() {

    const [scroll, setScroll] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
                if (window.scrollY === 0) {
                    setActiveLink('');
                }
            }


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <header className='fixed top-0 flex items-center justify-center w-full mx-auto mt-2'>
            <nav className={`rounded-full flex px-3 text-sm justify-center items-center dark:text-white text-gray-600 font-medium transition-colors ${scroll ? 'bg-white shadow-2xl dark:bg-gray-800 dark:shadow-2xl' : ''} `}>
                <a onClick={() => handleActiveLink('#experiencia')} className={`relative block px-2 py-2 transition ${activeLink === '#experiencia' ? 'text-blue-700' : 'hover:text-blue-700'} `} href="#experiencia">Experiencia</a>
                <a onClick={() => handleActiveLink('#proyectos')} className={`relative block px-2 py-2 transition ${activeLink === '#proyectos' ? 'text-blue-700' : 'hover:text-blue-700'} `} href="#proyectos">Proyectos</a>
                <a onClick={() => handleActiveLink('#sobre-mi')} className={`relative block px-2 py-2 transition ${activeLink === '#sobre-mi' ? 'text-blue-700' : 'hover:text-blue-700'} `} href="#sobre-mi">Sobre mí</a>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href="mailto:erick_caceres@outlook.cl">Contacto</a>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href={cv.url} target='_blank' rel='noreferrer'>{cv.nombre}</a>

            </nav>
        </header>
    )
}