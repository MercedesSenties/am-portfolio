import { TLang } from "@/definitions/types";
import { intl } from "@/helper/intl";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import logoDark from "/public/images/logo-dark.svg";
import logoLight from "/public/images/logo-light.svg";

const AppHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [activeLang, switchLanguage] = useLanguageSwitcher();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="sm:container sm:mx-auto">
      {/* Header */}
      <div className="z-10 py-6 px-5 sm:px-0 flex justify-between items-center">
        {/* Logo */}
        <div className="text-center content-center">
          <div className="max-w-20">
            <Link href="/">
              {activeTheme === "dark" ? (
                <Image
                  src={logoDark}
                  className="w-full cursor-pointer"
                  alt="Logo"
                />
              ) : (
                <Image
                  src={logoLight}
                  className="w-full cursor-pointer"
                  alt="Logo"
                />
              )}
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-sketch hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none uppercase">
          <div
            className="block text-left text-lg font-medium text-ternary-dark dark:text-ternary-light hover:scale-125 sm:mx-4 mb-2 sm:py-2 duration-500"
            aria-label="Projects"
          >
            <Link href="#projects">{intl("header.projects")}</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-ternary-dark dark:text-ternary-light hover:scale-125 sm:mx-4 mb-2 sm:py-2 duration-500"
            aria-label="About Me"
          >
            <Link href="#skills">{intl("header.aboutMe")}</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-ternary-dark dark:text-ternary-light hover:scale-125 sm:mx-4 mb-2 sm:py-2 duration-500"
            aria-label="Contact"
          >
            <Link href="#contact">{intl("header.contact")}</Link>
          </div>
        </div>

        {/* Theme switcher*/}
        <div className="inline-flex gap-2 items-center h-10">
          <div
            onClick={() => setTheme(activeTheme)}
            className="block bg-white dark:bg-white-lilac-900 p-3 shadow-md rounded-lg cursor-pointer h-full"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-white-lilac-950 hover:text-gray-400 dark:text-white-lilac-50 dark:hover:text-white-lilac-50" />
            ) : (
              <FiSun className="text-white-lilac-50 hover:text-gray-50" />
            )}
          </div>

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
              <FiX className="text-3xl text-secondary-dark dark:text-ternary-light" />
            ) : (
              <FiMenu className="text-3xl text-secondary-dark dark:text-ternary-light" />
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
        <div className="font-sketch block text-left text-lg text-primary-dark dark:text-ternary-light hover:scale-110 sm:mx-4 mb-2 sm:py-2">
          <Link
            href="#projects"
            aria-label="Projects"
            onClick={() => setShowMenu(false)}
          >
            {intl("header.projects")}
          </Link>
        </div>
        <div className="font-sketch block text-left text-lg text-primary-dark dark:text-ternary-light hover:scale-110 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
          <Link
            href="#skills"
            aria-label="Skills"
            onClick={() => setShowMenu(false)}
          >
            {intl("header.aboutMe")}
          </Link>
        </div>
        <div className="font-sketch block text-left text-lg text-primary-dark dark:text-ternary-light hover:scale-110 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
          <Link
            href="#contact"
            aria-label="Contact"
            onClick={() => setShowMenu(false)}
          >
            {intl("header.contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;