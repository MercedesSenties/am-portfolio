import { THEME_MAP } from "@/definitions/constants";
import { TLang } from "@/definitions/types";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import { ClickAwayListener } from "@mui/material";
import Link from "next/link";
import SVGLogo from "public/images/logo";
import React from "react";
import { BsSquareHalf } from "react-icons/bs";
import { FiChevronDown, FiSun } from "react-icons/fi";

const AppHeader: React.FC = () => {
  const [activeLang, switchLanguage] = useLanguageSwitcher();
  const [openPopover, setOpenPopover] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<number>(1);

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
    changeThemeColors(theme);
  });

  return (
    <div className="sm:container sm:mx-auto">
      {/* Header */}
      <div className="z-10 py-6 px-5 sm:px-0 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="max-w-20">
          <SVGLogo className="fill-primary w-full h-full" />
        </Link>

        <div className="inline-flex gap-2 items-center h-10">
          {/* Theme switcher*/}
          <ClickAwayListener onClickAway={() => setOpenPopover(false)}>
            <span className="relative h-full">
              <div
                onClick={() => setOpenPopover(!openPopover)}
                className="button-primary h-full w-10 flex items-center justify-center"
              >
                <FiSun className="text-primary w-1/2 h-1/2" />
              </div>
              {openPopover && (
                <div className="absolute mt-1 shadow-lg rounded-lg right-0 bg-primary p-3 min-w-36">
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((theme) => (
                      <div
                        key={theme}
                        className="w-5 h-5 cursor-pointer rounded-[0.250em] border-black border"
                        style={{ backgroundColor: THEME_MAP[theme].primary100 }}
                        onClick={() => {
                          setTheme(theme);
                          setOpenPopover(false);
                        }}
                      >
                        <BsSquareHalf
                          className="w-full h-full"
                          style={{ color: THEME_MAP[theme].background }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </span>
          </ClickAwayListener>

          {/* Language switcher */}
          <div className="relative">
            <select
              id="language"
              name="language"
              value={activeLang}
              onChange={(e) => switchLanguage(e.target.value as TLang)}
              className="block w-full appearance-none border border-transparent py-2 pl-3 pr-8 text-sm focus:outline-none button-primary"
            >
              <option value="es" disabled={activeLang === "es"}>
                ES
              </option>
              <option value="en" disabled={activeLang === "en"}>
                EN
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
