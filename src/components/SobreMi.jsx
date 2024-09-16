
export default function SobreMi() {

    const imgURL = 'https://media.licdn.com/dms/image/v2/D4E03AQGyYYIAm3FoWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710973753072?e=1731542400&v=beta&t=2VPhamQgaZ_o_WUS82qpvQ4alknw9pI-M9FwsyMlzmI';

    return (
        <section id="sobre-mi" className="text-white section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <div className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white undefined">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                Sobre Mí
            </div>

            <article className="flex flex-col md:flex-row items-center justify-center gap-8">

                <p className="order-2 md:order-1 text-gray-400">
                    Me llamo Erik Cáceres, apasionado por la tecnología y la programación en la cual
                    estoy en constante aprendizaje para mejorar mis habilidades para resolver problemas
                    a traves de la tecnología. Me encuentro en la búsqueda de nuevas oportunidades laborales
                    en el área de desarrollo web.
                </p>
                <img className="rounded-3xl order-1 md:order-2 w-64 h-full p-2 object-cover" width={200} height={200} src={imgURL} alt="me" />

            </article>
        </section >
    )
}

