
export default function Experiencia() {
    return (
        <section id="experiencia" className='section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>

            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" /></svg>
                Experiencia Laboral
            </h2>

            <ol className="relative mt-16 text-white">
                <li>
                    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2  before:border-white before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                        <div className="relative pb-12 md:col-span-2">
                            <div className="sticky top-0">
                                <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">•</span>
                                <h3 className="text-xl font-bold text-yellow-300">Digitador</h3>
                                <h4 className="p-0 m-0 text-sm text-gray-300">Diciembre 2019 - Febrero 2024</h4>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
                            <p>
                                Responsable del registro de los diferentes pallets de fruta congelada durante el proceso de congelación en el
                                sistema SIA & Agro. Encargado de brindar soporte técnico a los diversos equipos de Entre Ríos Farms.
                                Asimismo, gestione el despacho de fruta para exportación y la recepción de frutas que llegaban a Entre Ríos
                                Farms a través del sistema de SIA & Agro, trabajando bajo presión y con rapidez para cumplir con la función
                                establecida.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2  before:border-white before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                        <div className="relative pb-12 md:col-span-2">
                            <div className="sticky top-0">
                                <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">•</span>
                                <h3 className="text-xl font-bold text-yellow-300">Practica Profesional</h3>
                                <h4 className="p-0 m-0 text-sm text-gray-300">Febrero 2019 - Mayo 2019</h4>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3 ">
                            <p className="[&>span]:text-yellow-300">
                                Desarrolle una aplicación web utilizando <span>Codeigniter 3, HTML, CSS, Bootstrap y JavaScript</span>, para la gestión y
                                visualización del inventario de equipos de la municipalidad. Además, proporcione soporte técnico a los distintos
                                equipos de los diferentes departamentos de la municipalidad, asegurando el correcto funcionamiento de los
                                sistemas y dispositivos informáticos.
                            </p>
                        </div>
                    </div>
                </li>
            </ol>

        </section>
    )
}
