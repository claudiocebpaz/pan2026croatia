// src/utils/ImageUtils.ts
import { useEffect, useState } from "react";
import imagesData from "../data/images.json";

/**
 * Interface representing a single image.
 */
interface Image {
  id: number;
  src: string;
  alt: string;
}

/**
 * Interface representing the structure of images JSON.
 */
interface ImagesJson {
  [section: string]: Image[];
}

// Cast the imported JSON to the defined type
const images: ImagesJson = imagesData as ImagesJson;

/**
 * ImageLibrary provides utility functions for retrieving images.
 */
export class ImageLibrary {
  /**
   * Retrieve images from a specific section.
   */
  static getImages(section: string): Image[] {
    return images[section] || [];
  }

  /**
   * Retrieve ordered images from one or multiple sections.
   */
  static getOrderedImages(sections: string | string[]): Image[] {
    sections = Array.isArray(sections) ? sections : [sections];
    return sections.flatMap((section) => this.getImages(section));
  }

  /**
   * Retrieve all images in the project in ordered fashion.
   */
  static getAllOrderedImages(): Image[] {
    return this.getOrderedImages(Object.keys(images));
  }

  /**
   * Retrieve a specific image from a section by its ID.
   */
  static getSpecificImage(section: string, index: number): Image | null {
    return this.getImages(section).find((img) => img.id === index) || null;
  }
}

/**
 * Retrieve a single random image from all available images.
 */
export function getRandomGlobalImage(): Image | null {
  const allImages = ImageLibrary.getAllOrderedImages();
  if (allImages.length === 0) {
    console.warn("⚠️ No images found in the library.");
    return null;
  }
  const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
  console.log("🎲 Random Global Image:", randomImage);
  return randomImage;
}

/**
 * Interfaces for the image carousel system.
 */
export interface ImageData {
  id: number;
  src: string;
  alt: string;
}

export interface ImageSlot {
  current: ImageData;
  next?: ImageData;
  fading: boolean;
}

/**
 * Default values for the carousel transitions.
 */
export const DEFAULT_FADE_DURATION = 1000;
export const DEFAULT_IMAGE_CHANGE_DELAY = 4000;

/**
 * Hook to create an image carousel effect.
 */
export function useImageCarousel(
  section: string,
  numSlots: number = 4,
  fadeDuration: number = DEFAULT_FADE_DURATION,
  imageChangeDelay: number = DEFAULT_IMAGE_CHANGE_DELAY
) {
  const [slots, setSlots] = useState<ImageSlot[]>([]);
  const [imageQueue, setImageQueue] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(numSlots - 1);

  /**
   * Shuffle an array to randomize the image order.
   */
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  /**
   * Load images when the component is mounted.
   */
  useEffect(() => {
    async function loadImages() {
      const allImages = await ImageLibrary.getOrderedImages(section);
      const shuffledImages = shuffleArray(allImages);
      setImageQueue(shuffledImages);

      // Initialize the slots with the first 'numSlots' images
      const initialSlots: ImageSlot[] = shuffledImages
        .slice(0, numSlots)
        .map((img) => ({ current: img, fading: false }));
      setSlots(initialSlots);
      setCurrentIndex(numSlots - 1);
    }
    loadImages();
  }, [section, numSlots]);

  /**
   * Preload images for better performance.
   */
  useEffect(() => {
    imageQueue.forEach((img) => {
      const preloader = new Image();
      preloader.src = img.src;
    });
  }, [imageQueue]);

  /**
   * Rotate images within the slots at a defined interval.
   */
  useEffect(() => {
    if (imageQueue.length === 0 || slots.length !== numSlots) return;

    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageQueue.length;
      const slotIndex = (currentIndex + 1) % numSlots;

      // Step 1: Assign next image to slot but keep fading disabled
      setSlots((prevSlots) => {
        const newSlots = [...prevSlots];
        newSlots[slotIndex] = {
          ...newSlots[slotIndex],
          next: imageQueue[nextIndex],
          fading: false,
        };
        return newSlots;
      });

      // Step 2: Trigger fade effect after a short delay
      setTimeout(() => {
        setSlots((prevSlots) => {
          const newSlots = [...prevSlots];
          if (newSlots[slotIndex].next) {
            newSlots[slotIndex].fading = true;
          }
          return newSlots;
        });
      }, 50);

      // Step 3: Complete transition by replacing current image
      setTimeout(() => {
        setSlots((prevSlots) => {
          const newSlots = [...prevSlots];
          newSlots[slotIndex] = {
            current: newSlots[slotIndex].next!,
            fading: false,
          };
          return newSlots;
        });
        setCurrentIndex(nextIndex);
      }, fadeDuration);
    }, imageChangeDelay);

    return () => clearInterval(intervalId);
  }, [
    currentIndex,
    imageQueue,
    slots,
    numSlots,
    fadeDuration,
    imageChangeDelay,
  ]);

  return { slots, currentIndex };
}
