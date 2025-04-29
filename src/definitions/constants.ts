import { TThemeColor } from "./types";

export const THEME_MAP: Record<number, TThemeColor> = {
  1: {
    background: "rgb(150 158 170 / 1)", // Soft, neutral tone
    primary100: "rgb(242 235 216 / 1)",
    primary33: "rgb(242 235 216 / 0.33)",
    primary15: "rgb(242 235 216 / 0.15)",
    primary5: "rgb(242 235 216 / 0.05)",
  },
  2: {
    background: "rgb(78 102 122 / 1)", // Muted, deeper tone
    primary100: "rgb(239 224 188 / 1)",
    primary33: "rgb(239 224 188 / 0.33)",
    primary15: "rgb(239 224 188 / 0.15)",
    primary5: "rgb(239 224 188 / 0.05)",
  },
  3: {
    background: "rgb(178 90 97 / 1)", // Muted, reddish tone for contrast
    primary100: "rgb(235 218 180 / 1)",
    primary33: "rgb(235 218 180 / 0.33)",
    primary15: "rgb(235 218 180 / 0.15)",
    primary5: "rgb(235 218 180 / 0.05)",
  },
  4: {
    background: "rgb(171 99 76 / 1)", // Muted terracotta, softer orange
    primary100: "rgb(238 222 183 / 1)",
    primary33: "rgb(238 222 183 / 0.33)",
    primary15: "rgb(238 222 183 / 0.15)",
    primary5: "rgb(238 222 183 / 0.05)",
  },
  5: {
    background: "rgb(122 78 124 / 1)", // Earthy, pale purple (adjusted)
    primary100: "rgb(232 215 177 / 1)",
    primary33: "rgb(232 215 177 / 0.33)",
    primary15: "rgb(232 215 177 / 0.15)",
    primary5: "rgb(232 215 177 / 0.05)",
  },
  6: {
    background: "rgb(34 42 56 / 1)", // Darker tone for contrast
    primary100: "rgb(239 224 188 / 1)",
    primary33: "rgb(239 224 188 / 0.33)",
    primary15: "rgb(239 224 188 / 0.15)",
    primary5: "rgb(239 224 188 / 0.05)",
  },
};
