import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "480px",
      },
      fontSize: {
        xxs: ["10px", "10px"],
      },
      colors: {
        surface_light: "var(--surface-light)",
        surface_neutral: "var(--surface-neutral)",
        surface_muted: "var(--surface-muted)",
        surface_interactive: "var(--surface-interactive)",
        surface_contrast: "var(--surface-contrast)",
        border_light: "var(--border-light)",
        border_neutral: "var(--border-neutral)",
        border_contrast: "var(--border-contrast)",
        text_light: "var(--text-light)",
        text_neutral: "var(--text-neutral)",
        text_contrast: "var(--text-contrast)",
      },
      gridTemplateColumns: {
        "2fr_1fr": "2fr 1fr",
        "4fr_3fr": "4fr 3fr",
      },
      aspectRatio: {
        "1_16": "1.16",
        "1_38": "1.38",
      },
    },
  },
  plugins: [],
};
export default config;
