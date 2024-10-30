import { ComponentProps } from "@/definitions/types";
import Image from "next/image";
import merceJump from "/public/images/merceJump.gif";
import merceYellow from "/public/images/merceYellow.gif";

const AppBanner: React.FC<ComponentProps> = ({ t }) => {
  const myImages = [merceJump, merceYellow];
  const randomImage = Math.floor(Math.random() * myImages.length);

  return (
    <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2">
      <div className="w-full text-left">
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-center sm:text-left uppercase !leading-tight">
          {t("banner.hello")}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center sm:text-left">
          {t("banner.description")}
        </p>
      </div>

      <div className="mt-4">
        <Image
          src={myImages[randomImage]}
          className="w-full cursor-default"
          alt="Merce Image"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default AppBanner;
