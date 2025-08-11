
import Link from "next/link";

export default function FiestaCuadro() {
    return (
        <>
        <div className="relative flex flex-col items-center justify-center ">
           
            <section className="relative w-[500px] mx-auto h-[1000px] bg-[#f3ebe3] mt-15 border-[#8c755e] border-solid border-[1px] rounded-[12px]">
                <article  className="absolute top-[-10] left-[-10px] h-13 w-13 bg-[#f3ebe3] rounded-full border-r-[6px] rotate-45 border-[#8c755e] border-solid ">
                    <article className="absolute top-5 left-4 h-3 w-3 bg-[#8c755e] rounded-full"></article>
                </article>

                <article  className="absolute top-[-10] right-[-10px] h-13 w-13 bg-[#f3ebe3] rounded-full border-r-[6px] rotate-135 border-[#8c755e] border-solid ">
                    <article className="absolute top-5 left-4 h-3 w-3 bg-[#8c755e] rounded-full"></article>
                </article>

                <article  className="absolute bottom-[-10] left-[-10px] h-13 w-13 bg-[#f3ebe3] rounded-full border-r-[6px] rotate-320 border-[#8c755e] border-solid ">
                    <article className="absolute top-5 left-4 h-3 w-3 bg-[#8c755e] rounded-full"></article>
                </article>

                <article  className="absolute bottom-[-10] right-[-10px] h-13 w-13 bg-[#f3ebe3] rounded-full border-r-[6px] rotate-225 border-[#8c755e] border-solid ">
                    <article className="absolute top-5 left-4 h-3 w-3 bg-[#8c755e] rounded-full"></article>
                </article>

                <article className="flex  items-center flex-col h-[850px] w-[450px] bg-[#fdfcf4] absolute top-[48%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-[12px]">
                
                <img src="/confeti.png" className="w-24 h-24 mt-12"/>
                <h2 className="text-[#655b59] font-serif text-5xl mt-12">Fiesta</h2>
                
                <div className="flex items-center justify-center w-full px-8">

  <svg width="100%" height="60" viewBox="0 0 350 60" xmlns="http://www.w3.org/2000/svg" className="max-w-[350px]">
    <defs>
      <clipPath id="divider-shape" clipPathUnits="objectBoundingBox">
        <path d="M0,0.5 H0.38 C0.39,0.5 0.40,0.48 0.41,0.48 C0.42,0.48 0.43,0.5 0.44,0.5 H0.48 L0.5,0.55 L0.52,0.5 H0.56 C0.57,0.5 0.58,0.48 0.59,0.48 C0.60,0.48 0.61,0.5 0.62,0.5 H1 V0.52 H0 Z" />
      </clipPath>
    </defs>

    {/* Line connecting the diamonds */}
    <path d="M 25 20 
              Q 75 20, 100 20
              M 100 20
              Q 150 20, 200 20
              M 200 20
              Q 250 20, 325 20" 
          fill="none" stroke="#5A4635" strokeWidth="0.5" strokeLinecap="round" />

    {/* Left half-diamond (triangle) */}
    <path d="M 25 20 L 35 15 L 35 25 Z" 
          fill="#8c755e" stroke="#B8906F" strokeWidth="1" />
    
    {/* Middle full diamond */}
    <path d="M 100 15 L 105 20 L 100 25 L 95 20 Z" 
          fill="#8c755e" stroke="#B8906F" strokeWidth="1" />
   
    <path d="M 200 15 L 205 20 L 200 25 L 195 20 Z" 
          fill="#8c755e" stroke="#B8906F" strokeWidth="1" />
   
    {/* Right half-diamond (triangle) */}
    <path d="M 315 15 L 325 20 L 315 25 Z" 
          fill="#8c755e" stroke="#B8906F" strokeWidth="1" />
    </svg>
    </div>

                {/*Dia*/}
    <section className="flex flex-col items-center justify-center">
        <h2 className="text-[#8c755e] font-serif text-4xl mt-7">Dia</h2>
        <p className="text-[#655b59] text-[17px] mt-5">Sábado 15 de Junio - 17hs</p>
        <Link href="/" className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[240px] flex items-center justify-center">Agendar</Link>
    </section>
                
    {/*Lugar*/}
    <section className="flex flex-col items-center justify-center">
        <h2 className="text-[#8c755e] font-serif text-4xl mt-7">Lugar</h2>
        <p className="text-[#655b59] text-[17px] mt-5">Salon Avril</p>
        <Link href="/" className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[240px] flex items-center justify-center">Agendar</Link>
    </section>

    {/*Direccion*/}
    <section className="flex flex-col items-center justify-center">
        <h2 className="text-[#8c755e] font-serif text-4xl mt-7">Direccion</h2>
        <p className="text-[#655b59] text-[17px] mt-5">Av. Principal #123, Colonia Centro</p>
        <Link href="/" className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[240px] flex items-center justify-center">Agendar</Link>
    </section>
                </article>

            </section>
            
        </div>
        </>
    )
}