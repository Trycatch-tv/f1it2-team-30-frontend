function NotFound() {
  return <div>

  <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-gray-800 font-bold text-2xl">
                                Parece que has abierto
                                la puerta a Ningún Lugar...
                            </h1>
                            <p class="my-8 text-gray-800" >
                              ¡Esto fue inesperado! 
                              Por favor, visita nuestra página de inicio para llegar a donde necesitas.
                              </p>
                            <a href="/" class=" btn sm:w-full lg:w-auto my-8 border rounded md py-4 px-8 
                            text-center bg-[#E5F096] text-[#D75D17] hover:bg-[#719000] hover:text-[#FDEFCE]
                            focus:outline-double focus:ring-2 focus:bg-[#E5F096] focus:ring-opacity-50"
                            onclick="location.href='./'">
                              ¡De vuelta al inicio!                              
                              </a>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>

        </div>;
}

export default NotFound;
