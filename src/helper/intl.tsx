import { TLang } from "@/definitions/types";
import enLang from "public/locales/en/common.json";
import esLang from "public/locales/es/common.json";
import itLang from "public/locales/it/common.json";

let activeLang: TLang = "es";

export const setLanguage = (lang: TLang) => {
  activeLang = lang;
};

export const intl = (id: string, variable?: string) => {
  const lang = activeLang;
  try {
    // Define language data as a record to type-check the structure
    const languageData: Record<TLang, Record<string, string>> = {
      en: enLang as Record<string, string>,
      es: esLang as Record<string, string>,
      it: itLang as Record<string, string>,
    };

    const res = languageData[lang][id];

    if (res == null) {
      throw new Error(`Translation is missing: ${id}.`);
    }

    // If a variable is provided, replace it in the string
    return variable ? res.replace("{variable}", variable) : res;
  } catch (err) {
    console.error(err);
  }
};
