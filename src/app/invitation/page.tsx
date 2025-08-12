'use client'
import PartyDetailsCard from "../../components/PartyDetailsCard";
import DecorativeDivider from "../../components/ui/DecorativeDivider";
import CountdownTimer from "../../components/CountdownTimer";
import PhotoGallerySection from "../../components/PhotoGallerySection";

export default function Ingre1() {


    return (
      //contenedor principal
        <div className=" flex flex-col items-center justify-center bg-[#655b57] w-full">
           
      {/*contenedor de la portada*/}

            <section className=" flex h-[650px] w-[1200px] mx-auto my-0 bg-amber-950 shadow-[0_0_10px_0px_#000000] z-10">
                <img src="/portada.webp" className="object-cover h-full w-full shadow-2xl shadow-black z-0" alt="" />
                <div className=" bg-[#f3ebe3] h-full w-full shadow-2xl shadow-black p-5 z-10">
                  <section className="relative">
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-0 left-0" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-0 right-0 rotate-90" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-[520px] left-0 -scale-y-100" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-[520px] right-0 -scale-y-100 rotate-265" alt="" />
                  </section>
                  <article className="flex items-center justify-center flex-col mt-[80px]">
                  <h2 className="text-[#655b57] text-[20px]">18.11.2022</h2>
                  <article className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[450px] "></article>
                  <h1 className="text-[40px] text-[#d2b89f] mt-2">XV</h1>
                  <h2 className="text-[#655b59] font-serif text-7xl">Florencia</h2>
                  <article className=" border-solid border-[#655b59] border-b  mt-5 w-[450px] "></article>
                  <h3 className="text-[#655b59] font-bold text-[20px] mt-4">MIS 15 AÑOS</h3>
                  <img src="/gota-de-agua.png" className="w-3 h-6 mt-11 bg-transparent" alt="" />
                  <p className="text-[#655b59] font-serif text-[18px] mt-5 text-center">Te espero para compartir la alegría de esa noche que será para mi mágica, inolvidable y única.</p>
                  <img src="/vector.png" className="w-24 h-24 mt-5 bg-transparent" alt="" />
                  </article>
                </div>
                </section>

        {/*contenedor de reloj*/}              
              <article className="flex flex-col bg-[#fdfcf4] w-[1200px] mx-auto py-5 shadow-[0_0_10px_0px_#000000] z-10">
              <section className="flex gap-5 items-center justify-center">
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
              </section>
                <h2 className="text-[#655b59] font-serif text-5xl text-center font-bold mt-12">Falta</h2>
                <CountdownTimer/>
               <div className="flex items-center justify-center"> 
                <img 
                  src="/me-gusta.png" 
                  className="w-8 h-8 mt-2 bg-transparent"
                  style={{
                    animation: 'heartbeat 1.5s ease-in-out infinite',
                  }}
                  alt="Me gusta"
                />
                <style jsx>{`
                  @keyframes heartbeat {
                    0% {
                      transform: scale(1);
                      opacity: 0.8;
                    }
                    25% {
                      transform: scale(1.2);
                      opacity: 1;
                    }
                    50% {
                      transform: scale(1);
                      opacity: 0.8;
                    }
                    75% {
                      transform: scale(1.1);
                      opacity: 1;
                    }
                    100% {
                      transform: scale(1);
                      opacity: 0.8;
                    }
                  }
                `}</style>
                </div>
                <section className="flex gap-5 items-center justify-center mt-12">
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
              </section>
              </article>
              
            
        {/*contenedor de los datos de la fiesta */ }
              <section className="w-full mx-auto  bg-[#f3ebe3]  z-10">
                <PartyDetailsCard/>
              </section>
            
              {/*contenedor de carruzel*/}
              <section className="flex flex-col items-center justify-center w-[1200px] h-[800px] mx-auto bg-[#fdfcf4] shadow-[0_0_10px_0px_#000000] z-10">
             <article className="flex gap-5 mt-8 ">
             <DecorativeDivider/>
             <DecorativeDivider/>
             <DecorativeDivider/>
             <DecorativeDivider/>
             <DecorativeDivider/>
             </article> 
               <PhotoGallerySection/>
              <div>
                <article className="flex gap-5 mb-8">
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                <DecorativeDivider/>
                </article> 
              </div>
              </section>
              {/*contenedor de datos de la fiesta*/}
              <section className="w-[1200px] mx-auto h-[1200px] bg-[#f3ebe3] shadow-[0_0_10px_0px_#000000] z-10"></section>
        </div>
    )
}