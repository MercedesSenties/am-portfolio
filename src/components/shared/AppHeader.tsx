import { THEME_MAP } from "@/definitions/constants";
import { TLang } from "@/definitions/types";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import { Slider } from "@mui/material";
import Link from "next/link";
import SVGLogo from "public/images/logo";
import React from "react";
import { FiChevronDown, FiSun } from "react-icons/fi";

const AppHeader: React.FC = () => {
  const [activeLang, switchLanguage] = useLanguageSwitcher();

  const changeThemeColors = (theme: number) => {
    document.documentElement.style.setProperty(
      "--background",
      THEME_MAP[theme].background
    );
    document.documentElement.style.setProperty(
      "--color--primary--100",
      THEME_MAP[theme].primary100
    );
    document.documentElement.style.setProperty(
      "--color--primary--33",
      THEME_MAP[theme].primary33
    );
    document.documentElement.style.setProperty(
      "--color--primary--15",
      THEME_MAP[theme].primary15
    );
    document.documentElement.style.setProperty(
      "--color--primary--5",
      THEME_MAP[theme].primary5
    );
  };

  // Set color on first load
  React.useEffect(() => {
    changeThemeColors(1);
  });

  return (
    <div className="sm:container sm:mx-auto">
      {/* Header */}
      <div className="z-10 py-6 px-5 sm:px-0 flex justify-between items-center">
        {/* Logo */}
        <div className="max-w-20">
          <Link href="/">
            <SVGLogo className="fill-[var(--color--primary--100)] w-full h-full" />
          </Link>
        </div>

        <div className="inline-flex gap-2 items-center h-10">
          {/* Theme switcher*/}
          <div className="p-3 shadow-md rounded-lg cursor-pointer h-full">
            <FiSun />
          </div>
          <div className="w-32 bg-opacity-10 py-3 px-5 shadow rounded-lg h-full inline-flex items-center">
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
              className="shadow-lg block w-full appearance-none rounded-lg border border-transparent py-2 pl-3 pr-8 text-sm focus:outline-none"
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
              <FiChevronDown className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
