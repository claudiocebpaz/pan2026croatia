// src/components/FadeImageSlot.tsx
import React, { useEffect, useState } from "react";

export interface ImageData {
  id: number;
  src: string;
  alt: string;
}

interface FadeImageSlotProps {
  currentImage: ImageData;
  nextImage: ImageData;
  fadeDuration: number; // in milliseconds
  onFadeComplete: () => void;
}

const FadeImageSlot: React.FC<FadeImageSlotProps> = ({
  currentImage,
  nextImage,
  fadeDuration,
  onFadeComplete,
}) => {
  // Local state to trigger the fade-out effect
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start the fade-out immediately (you may add a delay if desired)
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      // When fade-out is active, wait for fadeDuration then call onFadeComplete
      const timer = setTimeout(() => {
        onFadeComplete();
      }, fadeDuration);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, fadeDuration, onFadeComplete]);

  return (
    <div className="relative w-full h-full">
      {/* Top image: its opacity transitions from 100% to 0% */}
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-[${fadeDuration}ms]
          ${fadeOut ? "opacity-0" : "opacity-100"}
        `}
      />
      {/* Bottom image: always rendered underneath */}
      <img
        src={nextImage.src}
        alt={nextImage.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default FadeImageSlot;
