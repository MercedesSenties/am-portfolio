import { TLang } from "@/definitions/types";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import Link from "next/link";
import SVGLogo from "public/images/logo";
import React from "react";
import { FiChevronDown, FiSun } from "react-icons/fi";
import { THEME_MAP } from "@/definitions/constants";
import { Slider } from "@mui/material";

const AppHeader: React.FC = () => {
  const [activeLang, switchLanguage] = useLanguageSwitcher();

  const changeThemeColors = (theme: number) => {
    console.info("Theme: ", THEME_MAP[theme]);
    console.info("Document; ", document.documentElement);
    document.documentElement.style.setProperty(
      "--background",
      THEME_MAP[theme].background
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      THEME_MAP[theme].primary
    );
  };

  return (
    <div className="sm:container sm:mx-auto">
      {/* Header */}
      <div className="z-10 py-6 px-5 sm:px-0 flex justify-between items-center">
        {/* Logo */}
        <div className="max-w-20">
          <Link href="/">
            <SVGLogo className="fill-[var(--primary-color)] w-full h-full" />
          </Link>
        </div>

        <div className="inline-flex gap-2 items-center h-10">
          {/* Theme switcher*/}
          <div className="bg-white p-3 shadow-md rounded-lg cursor-pointer h-full">
            <FiSun className="text-white-lilac-950" />
          </div>
          <div className="w-52 bg-white bg-opacity-10 py-3 px-5 shadow rounded-lg h-full inline-flex items-center">
            <Slider
              defaultValue={1}
              marks
              min={1}
              max={7}
              size="medium"
              onChange={(_, value) => changeThemeColors(value as number)}
            />
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
      </div>
    </div>
  );
};

export default AppHeader;
