
export default function Proyectos() {
    return (
        <section id="proyectos" className="text-white section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white undefined">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                Proyectos
            </h2>

            <div className="grid gap-2 md:grid-cols-2">
                <img className="rounded-2xl shadow-xl object-cover object-top w-full h-56 transition duration-500 hover:scale-95" src="portafolio/public/images/carwash.png" alt="" />
                <div className="flex flex-col gap-2 py-5 md:py-0 px-0 md:px-5">
                    <h3 className="text-3xl font-semibold">Carwash Black</h3>
                    <p className="text-gray-400">
                        Pagina web que
                        ofrece servicios de lavado de autos, en la cual se puede ver
                        información sobre los servicios, precios y contacto.
                    </p>
                </div>

            </div>





        </section >
    )
}
