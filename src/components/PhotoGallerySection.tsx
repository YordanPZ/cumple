import React from 'react';
import PhotoCarousel from './PhotoCarousel';

export default function PhotoGallerySection() {
    return (
        <section className="w-[1200px] mx-auto h-[900px] bg-[#fdfcf4] pt-20">

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
                    <circle
                        cx="30"
                        cy="12"
                        r="3"
                        fill="#d2b89f"
                        className="pulse"
                    />

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
                    <circle
                        cx="280"
                        cy="12"
                        r="3"
                        fill="#d2b89f"
                        className="pulse"
                    />
                    
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
            <h2 className="text-[#655b59] font-serif text-4xl text-center mt-6">Un recorrido de estos 15 años</h2>
            <p className="text-[#8c755e] font-serif text-[17px] text-center mt-1">Junto a personas que son muy importantes en mi vida</p>
            <div className="flex justify-center mb-6 relative mt-10">
                <div className="camera-icon animate-float">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="camera-flash"></div>
                    </div>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#c8a97e"/>
                        <path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="#c8a97e"/>
                    </svg>
                </div>
            </div>
            
            {/* Photo Carousel Section */}
            <div className="mt-16">
                <PhotoCarousel />
            </div>

            {/*fin del contenido de la seccion*/}
            <style jsx>{`
                .separator {
                    opacity: 1;
                    animation: fadeIn 1s ease-out forwards;
                }
                
                @keyframes fadeIn {
                    from { opacity: 1; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .draw-line {
                    stroke-dasharray: 1200;
                    stroke-dashoffset: 1200;
                    animation: draw 1.8s ease-in-out forwards;
                }
                
                .left-line {
                    animation-delay: 0.3s;
                }
                
                .right-line {
                    animation-delay: 1.8s;
                }
                
                .draw-path {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: draw 2s ease-in-out forwards;
                }
                
                .center-path-1 {
                    animation-delay: 0.6s;
                }
                
                .center-path-2 {
                    animation-delay: 0.9s;
                }
                
                @keyframes draw {
                    to {
                        stroke-dashoffset: 1;
                    }
                }
                
                .pulse {
                    opacity: 1;
                    animation: pulse 1s ease-in-out infinite alternate;
                }
                
                @keyframes pulse {
                    from {
                        opacity: 1;
                        transform: scale(0.5);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                /* Pulse animation for circles */
                .left-line + .pulse {
                    animation-delay: 0.6s;
                }
                
                .right-line + .pulse {
                    animation-delay: 2.1s;
                }
                
                .camera-icon {
                    transition: transform 0.3s ease;
                }
                
                .camera-flash {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    background: #c8a97e;
                    border-radius: 50%;
                    opacity: 0;
                    filter: blur(8px);
                    animation: flash 3s ease-in-out infinite;
                }
                
                @keyframes flash {
                    0%, 100% { 
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    25% { 
                        opacity: 0.6;
                        transform: scale(1.2);
                    }
                    50% { 
                        opacity: 0;
                        transform: scale(0.5);
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
`}</style></section>

    )
}