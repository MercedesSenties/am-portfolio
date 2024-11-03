import { THEME_MAP } from "@/definitions/constants";
import { TLang } from "@/definitions/types";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import { ClickAwayListener, Slider } from "@mui/material";
import SVGLogo from "public/images/logo";
import React from "react";
import { FiChevronDown, FiSun } from "react-icons/fi";

const AppHeader: React.FC = () => {
  const [activeLang, switchLanguage] = useLanguageSwitcher();
  const [openSlider, setOpenSlider] = React.useState<boolean>(false);
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
        <div className="max-w-20">
          <SVGLogo className="fill-primary w-full h-full" />
        </div>

        <div className="inline-flex gap-2 items-center h-10">
          {/* Theme switcher*/}
          <ClickAwayListener onClickAway={() => setOpenSlider(false)}>
            <span>
              {!openSlider && (
                <div
                  onClick={() => setOpenSlider(true)}
                  className="button-primary p-3"
                >
                  <FiSun />
                </div>
              )}
              {openSlider && (
                <div
                  className={`gap-5 flex p-3 h-10 items-center button-primary ${openSlider ? "w-32 xs:w-48 pl-5" : ""}`}
                >
                  <Slider
                    marks
                    min={1}
                    max={7}
                    size="medium"
                    onChange={(_, value) => changeThemeColors(value as number)}
                    onChangeCommitted={(_, value) => setTheme(value as number)}
                  />
                  <FiSun onClick={() => setOpenSlider(!openSlider)} />
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
