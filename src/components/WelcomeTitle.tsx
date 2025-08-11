import Link from "next/link";

export default function Tittle() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3ebe3] w-full">
            <div className="relative bg-[#f3ebe3] h-[550px] w-[950px] flex flex-col items-center ">
                
                <section>
                <img src="free-png.ru-387.png" className="w-24 h-24 absolute top-0 left-0" alt="" />
                <img src="free-png.ru-387.png" className="w-24 h-24 absolute top-0 right-0 rotate-90" alt="" />
                <img src="free-png.ru-387.png" className="w-24 h-24 absolute bottom-0 left-0 -scale-y-100" alt="" />
                <img src="free-png.ru-387.png" className="w-24 h-24 absolute bottom-0 right-0 -scale-y-100 rotate-265" alt="" />
                </section>
                
                <h2 className="text-2xl font-serif text-[#867666] h-[50px] p-0 mt-7 ">Bienvenidos a la invitación de</h2>
               
                <article className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[450px] "></article>
                <h1 className="text-6xl text-[#d2b89f] mt-7">XV</h1>
                <h2 className="text-[#655b59] font-serif text-8xl">Florencia</h2>
                <article className="border-solid border-[#c3b5a8] border-b  mt-5 w-[450px] "></article>
               
                <h3 className="text-[#655b59] font-bold text-2xl mt-4">MIS 15 AÑOS</h3>
                <img src="vector.png" className="w-24 h-24 mt-5 bg-transparent" alt="" />
                <h3 className="text-[#7c7a74] text-center font-serif mt-5 text-[20px]">La musica de fondo es parte de la experiencia</h3>
              
              <section className="flex gap-5 mb-5 items-center justify-center">
                <Link href="/invitation" className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[240px] flex items-center justify-center ">Ingresar con musica</Link>
                <Link href="/invitation" className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[240px] flex items-center justify-center">Ingresar sin musica</Link>
              </section>
            </div>

        </div>
    )
}