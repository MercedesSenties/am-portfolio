import { TImage } from "@/definitions/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export interface ImageSliderProps {
  images: TImage[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative w-full">
      <div
        className="relative w-full"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          width={1920}
          height={1080}
          className="transition-all duration-500 ease-in-out"
        />
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <HiChevronLeft className="w-8 h-8" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <HiChevronRight className="w-8 h-8" />
        </button>
      </div>
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 cursor-pointer ${
              index === currentIndex
                ? "bg-[var(--color--primary--100)] rounded-xl"
                : "rounded-xl"
            } transition-all duration-500 ease-in-out`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
