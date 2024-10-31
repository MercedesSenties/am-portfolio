import { ComponentProps } from "@/definitions/types";

const AppFooterCopyright: React.FC<ComponentProps> = ({ t }) => {
  return (
    <div className=" flex justify-center items-center text-center py-6 px-6">
      <p className="text-xs md:text-sm">
        {new Date().getFullYear()} &copy; {t("footer.text")}
        <a
          href="https://emilia-schettino.com/"
          target="__blank"
          className="hover:text-neutral-400 ml-1 duration-500"
        >
          Emilia Schettino
        </a>
      </p>
    </div>
  );
};

export default AppFooterCopyright;
