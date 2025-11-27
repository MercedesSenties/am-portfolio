import { ComponentProps } from "@/definitions/types";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import merceJump from "/public/images/merceJump.gif";
import merceYellow from "/public/images/merceYellow.gif";

const AppBanner: React.FC<ComponentProps> = ({ t }) => {
  const [randomImage, setRandomImage] = useState<StaticImageData | null>(null);

  useEffect(() => {
    const myImages: StaticImageData[] = [merceJump, merceYellow];
    const randomIndex = Math.floor(Math.random() * myImages.length);
    setRandomImage(myImages[randomIndex]);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
      <div className="w-full text-left space-y-4 lg:col-span-3">
        <h1 className="text-3xl md:text-5xl text-center sm:text-left !leading-tight">
          {t("banner.title")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center sm:text-left font-semibold">
          {t("banner.subtitle")}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("banner.description"),
          }}
        ></p>
      </div>

      {randomImage != null ? (
        <Image
          src={randomImage.src}
          unoptimized
          className="md:w-1/2 w-full lg:w-full mx-auto cursor-default lg:col-span-2"
          alt="Merce Image"
          width={60}
          height={60}
          priority={true}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AppBanner;
