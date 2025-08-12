"use client";
import DecorativeDivider from "../../components/ui/DecorativeDivider";
import CountdownTimer from "../../components/CountdownTimer";
import { CardDecoration } from "@/components/svg/CardDecoration";
import Image from "next/image";
import DecorativeFrame from "@/components/ui/DecorativeFrame";
import DecoratedSection from "@/components/ui/DecoratedSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import Link from "next/link";

export default function Page() {
  return (
    //contenedor principal
    <div className=" flex flex-col items-center flex-wrap justify-center  w-full">
      {/*contenedor de la portada*/}

      <section className="flex flex-col md:flex-row mx-auto my-0 w-full z-10 md:max-h-[85vh]">
        <div className="w-full md:w-1/2 max-h-[50vh] md:max-h-full">
          <Image
            height={800}
            width={800}
            src="/portada.webp"
            className="object-cover w-full h-full z-0"
            alt=""
          />
        </div>
        <div className="p-6 bg-pallete-6 w-full md:w-1/2 shadow-[-2px_0_10px_5px_rgba(0,0,0,0.2)] md:min-w-[420px]">
          <div className="h-full w-full  p-5 z-10 relative py-22">
            {/* <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-0 left-0" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-0 right-0 rotate-90" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-[520px] left-0 -scale-y-100" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-[520px] right-0 -scale-y-100 rotate-265" alt="" /> */}

            <CardDecoration className="size-16 sm:size-20 md:size-24 top-0 left-0" />
            <CardDecoration className="size-16 sm:size-20 md:size-24 right-0 top-0 -scale-x-100" />
            <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 left-0 -scale-y-100" />
            <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 right-0 -scale-x-100 -scale-y-100" />

            <div className="flex items-center justify-center flex-col ">
              <h2 className="text-pallete-2 text-[20px]">18.11.2022</h2>
              <div className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[60%]"></div>
              <h1 className="text-[40px] text-[#d2b89f] mt-2">XV</h1>
              <h2 className="text-[#655b59] font-serif text-7xl">Florencia</h2>
              <div className=" border-solid border-[#655b59] border-b  mt-5 w-[60%]"></div>
              <h3 className="text-[#655b59] font-bold text-[20px] mt-4">
                MIS 15 AÑOS
              </h3>
              {/* <img src="/gota-de-agua.png" className="w-3 h-6 mt-11 bg-transparent" alt="" /> */}
              <p className="text-[#655b59] font-serif text-[18px] mt-5 text-center">
                Te espero para compartir la alegría de esa noche que será para
                mi mágica, inolvidable y única.
              </p>
              {/* <img src="/vector.png" className="w-24 h-24 mt-5 bg-transparent" alt="" /> */}
            </div>
          </div>
        </div>
      </section>

      {/*contenedor de reloj*/}
      <section className="flex flex-col bg-pallete-5 w-full mx-auto py-5 z-10  sombra_arriba_abajo">
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
        <div className="pb-4">
          <h2 className="text-pallete-1 text-5xl text-center font-bold mt-6 font-playfair-display">
            Falta
          </h2>
          <CountdownTimer />
          <div className="flex items-center justify-center">
            <Image
              width={200}
              height={200}
              src="/me-gusta.png"
              className="w-8 h-8 mt-2 bg-transparent animate-heartbeat"
              alt="Me gusta"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
      </section>

      {/*contenedor de los datos de la fiesta */}
      <section className="w-full flex justify-center bg-pallete-6 items-center py-27  flex-col px-2">
        <DecoratedSection>
          <DecorativeFrame />
        </DecoratedSection>
      </section>

      {/*contenedor de carruzel*/}
      <section className="flex flex-col items-center justify-center bg-pallete-5 sombra_arriba_abajo w-full shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.4)]">
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 pt-4 w-full">
          <DecorativeDivider className="" />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
        <PhotoGallerySection />
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
      </section>
      {/*contenedor de datos de la fiesta*/}
      <section className="min-h-[90vh] bg-pallete-6 w-full flex flex-col justify-center">
        <div className="flex justify-center ">
          <svg
            width="300"
            height="24"
            viewBox="0 0 300 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="separator"
          >
            {/* Left line */}
            <path
              d="M20,12 L-200,12"
              stroke="rgba(210, 184, 159, 0.5)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="draw-line left-line"
            />

            {/* Left circle */}
            <circle cx="30" cy="12" r="3" fill="#d2b89f" className="pulse" />

            {/* Center decorative elements */}
            <path
              d="M150,12 C150,12 140,2 130,2 C120,2 120,22 130,22 C140,22 150,12 150,12Z"
              stroke="#d2b89f"
              strokeWidth="1.5"
              fill="none"
              className="draw-path center-path-1"
            />
            <path
              d="M150,12 C150,12 160,2 170,2 C180,2 180,22 170,22 C160,22 150,12 150,12Z"
              stroke="#d2b89f"
              strokeWidth="1.5"
              fill="none"
              className="draw-path center-path-2"
            />

            {/* Right circle */}
            <circle cx="280" cy="12" r="3" fill="#d2b89f" className="pulse" />

            {/* Right line */}
            <path
              d="M400,12 L280,12"
              stroke="rgba(210, 184, 159, 0.5)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="draw-line right-line"
            />
          </svg>
        </div>
        {/*contenido de la seccion*/}
        <h2 className="text-[#655b59] font-serif text-4xl text-center mt-6">
          Un recorrido de estos 15 años
        </h2>
        <p className="text-[#8c755e] font-serif text-[17px] text-center mt-1">
          Junto a personas que son muy importantes en mi vida
        </p>
        <div className="flex justify-evenly mt-6 flex-wrap gap-4">
          <DecoratedSection className="max-w-[350px] min-h-[500px]">
            <div className="flex border border-pallete-2 justify-between items-center flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
                <h2 className="text-[#655b59] font-serif text-2xl ">
                  Música
                </h2>
                <img src="/confeti.png" className="w-24 h-24" />
                <p>
                  ¿Cuál es la canción que no debe faltar en la PlayList de la
                  fiesta?
                </p>
                  <Link
            href="/"
            className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
          >
            Agendar
          </Link>
            </div>
          </DecoratedSection>

          <DecoratedSection className="max-w-[350px]">
            <div className="flex border border-pallete-2 items-center justify-between flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
                <h2 className="text-[#655b59] font-serif text-2xl">
                  Dress Code
                </h2>
                <img src="/confeti.png" className="w-24 h-24" />
                <p>Una orientación para tu vestuario</p>
                  <Link
            href="/"
            className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
          >
            Agendar
          </Link>
            </div>
          </DecoratedSection>
          <DecoratedSection className="max-w-[350px]">
            <div className="flex border border-pallete-2 justify-between items-center flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
              <h2 className="text-[#655b59] font-serif text-2xl">
                Tips y Notas
              </h2>
              <img src="/confeti.png" className="w-24 h-24" />
              <p>Información adicional para tener en cuenta</p>
                <Link
            href="/"
            className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
          >
            Agendar
          </Link>
            </div>
          </DecoratedSection>
        </div>
      </section>
    </div>
  );
}
