import { data } from '../assets/data/data';

const { alias, foto, carrera, redes } = data;
const github = redes[0];
const linkedin = redes[1];

export default function Header() {


    return (
        <section className='py-16 md:py-36 container mx-auto scroll-m-20 w-full lg:max-w-4xl md:max-w-2xl'>

            <div className='max-w-xl'>
                <div className='flex gap-10 mb-4'>
                    <img className='rounded-full size-24' src={foto} alt="foto" />
                    <div className='flex justify-center items-center'>
                        <a className='flex justify-center items-center shadow-2xl transition hover:scale-95 hover:bg-white hover:text-black text-white border rounded-full px-4 py-2'
                            target='_blank'
                            href={`${linkedin.url}`}
                        >
                            Disponible para trabajar
                        </a>
                    </div>
                </div>
                <h1 className='text-4xl font-bold text-white'>Hello World, soy "{alias}" ✌️</h1>
                <p className=' text-gray-400 mt-6 [&>strong]:text-yellow-500'>
                    Egresado de <strong>{carrera}</strong> en 2024 y apasionado por la programación y la tecnología en especial en el área del desarrollo Web.
                </p>

                <nav className='flex flex-wrap gap-4 mt-8'>
                    <a className='inline-flex gap-2 item-center justify-center transition text-white hover:text-black hover:bg-white border rounded-full px-4 py-1' href="mailto:erick_caceres@outlook.cl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                        Contáctame
                    </a>
                    <a className='inline-flex gap-2 item-center justify-center transition text-white hover:text-black hover:bg-white border rounded-full px-4 py-1' href={linkedin.url} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                        LinkedIn
                    </a>
                    <a className='inline-flex gap-2 item-center justify-center transition text-white hover:text-black hover:bg-white border rounded-full px-4 py-1' href={github.url} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        Github
                    </a>
                </nav>

            </div>

        </section>
    )
}
