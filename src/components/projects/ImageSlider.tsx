import { TImage } from "@/definitions/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export interface ComponentProps {
  images: TImage[];
}

const ImageSlider: React.FC<ComponentProps> = ({ images }) => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
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

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="relative w-full"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          width={1920}
          height={1080}
          className="transition-all duration-500 ease-in-out"
        />
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
          onClick={prevSlide}
        >
          <HiChevronLeft className="w-8 h-8 text-white-lilac-50 hover:text-gray-200" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
          onClick={nextSlide}
        >
          <HiChevronRight className="w-8 h-8 text-white-lilac-50 hover:text-gray-200" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 mx-1 ${
              index === currentIndex
                ? "bg-white-lilac-950 dark:bg-white-lilac-600 rounded-xl"
                : "bg-white-lilac-100 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
