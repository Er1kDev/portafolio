
import React, { useEffect, useState } from 'react'

export default function NavBar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='fixed top-0 flex items-center justify-center w-full mx-auto mt-2'>
            <nav className={`rounded-full flex px-3 text-sm justify-center items-center text-white font-medium transition-colors ${scroll ? 'bg-gray-800' : ''} `}>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href="/#experiencia">Experiencia</a>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href="/#proyectos">Proyectos</a>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href="/#sobre-mi">Sobre mí</a>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href="mailto:erick_caceres@outlook.cl">Contacto</a>
                <a className='relative block px-2 py-2 transition hover:text-blue-700 ' href="https://drive.google.com/file/d/11pbv_hbKXZFQk3I8v56-uahDYXYelU6n/view?usp=sharing" target='_blank' rel='noreferrer'>CV</a>

            </nav>
        </header>
    )
}