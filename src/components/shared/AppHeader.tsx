import { ComponentProps, TLang } from "@/definitions/types";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import logoDark from "/public/images/logo-dark.svg";
import logoLight from "/public/images/logo-light.svg";

const AppHeader: React.FC<ComponentProps> = ({ t }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState(false); 
  const [activeLang, switchLanguage] = useLanguageSwitcher();

  React.useEffect(() => {
    setMounted(true);
    console.info("Theme:", theme)
    console.info("Resolved:", resolvedTheme)
  }, []);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="sm:container sm:mx-auto">
      {/* Header */}
      <div className="z-10 py-6 px-5 sm:px-0 flex justify-between items-center">
        {/* Logo */}
        <div className="text-center content-center">
          <div className="max-w-20 cursor-pointer">
            {mounted && (
              <Link href="/">
                {resolvedTheme === "light" ? (
                  <Image src={logoDark} className="w-full" alt="Logo" />
                ) : (
                  <Image src={logoLight} className="w-full" alt="Logo" />
                )}
              </Link>
            )}
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-sketch hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none uppercase">
          <div
            className="block text-left text-lg font-medium hover:scale-125 sm:mx-4 mb-2 sm:py-2 duration-500"
            aria-label="Projects"
          >
            <Link href="#projects">{t("header.projects")}</Link>
          </div>
          <div
            className="block text-left text-lg font-medium hover:scale-125 sm:mx-4 mb-2 sm:py-2 duration-500"
            aria-label="About Me"
          >
            <Link href="#skills">{t("header.aboutMe")}</Link>
          </div>
          <div
            className="block text-left text-lg font-medium hover:scale-125 sm:mx-4 mb-2 sm:py-2 duration-500"
            aria-label="Contact"
          >
            <Link href="#contact">{t("header.contact")}</Link>
          </div>
        </div>

        {/* Theme switcher*/}
        <div className="inline-flex gap-2 items-center h-10">
          {mounted && (
            <div
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="block bg-white dark:bg-white-lilac-900 p-3 shadow-md rounded-lg cursor-pointer h-full"
            >
              {resolvedTheme === "light" ? (
                <FiMoon className="text-white-lilac-950 hover:text-gray-400 dark:text-white-lilac-50 dark:hover:text-white-lilac-50" />
              ) : (
                <FiSun className="text-white-lilac-50 hover:text-gray-50" />
              )}
            </div>
          )}
          {/* Language switcher */}
          <div className="relative">
            <select
              id="language"
              name="language"
              value={activeLang}
              onChange={(e) => switchLanguage(e.target.value as TLang)}
              className="shadow-lg bg-white text-white-lilac-950 block w-full appearance-none rounded-lg border border-transparent dark:bg-white-lilac-900 py-2 pl-3 pr-8 text-sm dark:text-white-lilac-50 focus:dark:border-white-lilac-50 focus:outline-none focus:dark:ring-white-lilac-50"
            >
              <option value="en" disabled={activeLang === "en"}>
                EN
              </option>
              <option value="es" disabled={activeLang === "es"}>
                ES
              </option>
              <option value="it" disabled={activeLang === "it"}>
                IT
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <FiChevronDown
                className="h-4 w-4 text-white-lilac-950 dark:text-white-lilac-50"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Small screen hamburger menu */}
        <div className="sm:hidden text-center content-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            {showMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Header links small screen */}
      <div
        className={
          showMenu
            ? "block uppercase m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
            : "hidden"
        }
      >
        <div className="font-sketch block text-left text-lg hover:scale-110 sm:mx-4 mb-2 sm:py-2">
          <Link
            href="#projects"
            aria-label="Projects"
            onClick={() => setShowMenu(false)}
          >
            {t("header.projects")}
          </Link>
        </div>
        <div className="font-sketch block text-left text-lg hover:scale-110 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
          <Link
            href="#skills"
            aria-label="Skills"
            onClick={() => setShowMenu(false)}
          >
            {t("header.aboutMe")}
          </Link>
        </div>
        <div className="font-sketch block text-left text-lg hover:scale-110 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
          <Link
            href="#contact"
            aria-label="Contact"
            onClick={() => setShowMenu(false)}
          >
            {t("header.contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
