'use client';

import { useState, useEffect } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  { 
    id: 1, 
    src: '/portada.webp', 
    alt: 'Foto 1',
    title: 'Recuerdos Especiales',
    description: 'Momentos inolvidables juntos'
  },
  { 
    id: 2, 
    src: '/portada.webp', 
    alt: 'Foto 2',
    title: 'Celebración',
    description: 'Disfrutando cada instante'
  },
  { 
    id: 3, 
    src: '/portada.webp', 
    alt: 'Foto 3',
    title: 'Felicidad',
    description: 'Sonrisas que iluminan el día'
  },
  { 
    id: 4, 
    src: '/portada.webp', 
    alt: 'Foto 4',
    title: 'Aventuras',
    description: 'Cada día es una nueva historia'
  },
  { 
    id: 5, 
    src: '/portada.webp', 
    alt: 'Foto 5',
    title: 'Amor',
    description: 'La mejor compañía'
  },
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // Auto-advance slides every 2 seconds, but pause on hover or when image is selected
  useEffect(() => {
    if (isHovered || selectedImage !== null) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [isHovered, selectedImage]);

  const selectImage = (index: number) => {
    setSelectedImage(photos[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Group photos into rows of 3
  const rows: Photo[][] = [];
  for (let i = 0; i < photos.length; i += 3) {
    rows.push(photos.slice(i, i + 3));
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Photo Chain */}
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / 3)}% + ${currentIndex * 1}rem))`,
            width: `${photos.length * 33.333}%`
          }}
        >
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className="flex-shrink-0 w-1/3 px-[1rem] transition-all duration-300 hover:scale-105"
            >
              <div className={`relative overflow-hidden shadow-[2px_8px_8px_rgba(0.2,0.2,0.2,0.2)] w-120 h-72 mx-auto pb-18 pt-2 pr-5 pl-5 transition-colors duration-1000 ${
                currentIndex === index ? 'bg-[#b39072]' : 'bg-[#fdfcf4]'
              }`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              
              </div>
            </div>
          ))}
        </div>

  
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-[#c8a97e] w-6' 
                : 'bg-gray-300 w-4 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
