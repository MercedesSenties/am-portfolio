import "@/styles/globals.css";

import AppFooterCopyright from "@/components/shared/AppFooterCopyright";
import AppHeader from "@/components/shared/AppHeader";
import UseScrollToTop from "@/hooks/useScrollToTop";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const sketch = localFont({
  src: "./fonts/Sketch.ttf",
  variable: "--font-sketch",
  weight: "200 700",
  display: "swap",
  style: "normal",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

const App = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`bg-white-lilac-50 dark:bg-white-lilac-950 text-white-lilac-950 dark:text-white-lilac-50 transition duration-300 ${sketch.variable} ${raleway.variable}`}
    >
      <div>
        <AppHeader t={t} />
        <Component {...pageProps} />
        <AppFooterCopyright />
      </div>
      <UseScrollToTop />
    </div>
  );
};

export default appWithTranslation(App);
