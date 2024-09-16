import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <>
      <NavBar />
      <main className='mx-4'>
        <Header />
        <div className='space-y-24'>
          <Experiencia />
          <Proyectos />
          <SobreMi />
        </div>
      </main>
      <footer className='opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center'>
        <div className='rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4'>
          <span class="text-sm sm:text-center text-zinc-200/90">© 2024 Er1kDev. derechos reservados
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0'>
            <li> <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a> </li>
            <li> <a href="mailto:erick_caceres@outlook.cl" class="hover:underline me-4 md:me-6">Contacto</a> </li>
          </ul>
        </div>
      </footer>

    </>
  </StrictMode>,
)

