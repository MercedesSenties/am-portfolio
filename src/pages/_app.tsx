import "@/styles/globals.css";

import AppFooterCopyright from "@/components/shared/AppFooterCopyright";
import AppHeader from "@/components/shared/AppHeader";
import UseScrollToTop from "@/hooks/useScrollToTop";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

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
    <div className={`transition duration-300 ${raleway.variable}`}>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooterCopyright t={t} />
      <UseScrollToTop />
    </div>
  );
};

export default appWithTranslation(App);
