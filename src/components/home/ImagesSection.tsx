import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Define the type for a single image item
export type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

// Define props for the ImagesSection component
type ImagesSectionProps = {
  images: ImageItem[];
};

/**
 * ImagesSection component renders an image carousel using Swiper.
 * It starts/stops autoplay only when visible in the viewport.
 */
const ImagesSection: React.FC<ImagesSectionProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null); // Reference for this Swiper instance

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start(); // Start autoplay only for this Swiper
          } else {
            swiperRef.current.autoplay.stop(); // Stop autoplay when out of viewport
          }
        }
      },
      { threshold: 0.2 } // Detect when at least 20% of the component is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="order-1 lg:col-span-8 lg:order-2 -mx-2 lg:mx-2"
    >
      {/* Swiper carousel for images */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className="aspect-[4/3] md:aspect-video overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10"
          >
            <img
              alt={image.alt}
              src={image.src}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSection;
