import { TLang } from "@/definitions/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useLanguageSwitcher = (): [TLang, (language: TLang) => void] => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<TLang>("es");
  const router = useRouter();

  const switchLanguage = (language: TLang) => {
    document.cookie = `NEXT_LOCALE=${language}`;
    i18n.changeLanguage(language);
    setActiveLang(language);
    router.push(router.asPath, router.asPath, { locale: language });
  };

  useEffect(() => {
    setActiveLang(i18n.language as TLang);
  }, [i18n.language]);

  return [activeLang, switchLanguage];
};

export default useLanguageSwitcher;
