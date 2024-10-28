import { intl } from "@/helper/intl";
import Image from "next/image";
import merceJump from "/public/images/merceJump.gif";
import merceYellow from "/public/images/merceYellow.gif";

function AppBanner() {
  var myImages = [merceJump, merceYellow];
  var randomImage = Math.floor(Math.random() * myImages.length);

  return (
    <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2">
      <div className="w-full text-left">
        <h1 className="font-sketch text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          {intl("banner.hello")}
        </h1>
        <p className="mt-4 text-xl md:text-xl lg:text-3xl xl:text-3xl text-center sm:text-left leading-normal text-primary-dark dark:text-primary-light">
          {intl("banner.description")}
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
}

export default AppBanner;
