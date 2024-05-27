import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { sm: "320px", md: "768px", base: "1280px" },
      colors: {
        yellow: "#FFC107",
        white: "#FDF7F2",
        accentWhite: "#FEF9F9",
        black: "#111111",
        blue: "#54ADFF",
        blueLight: "#CCE4FB",
        green: "#00C3AD",
        red: "#F43F5E",
        originWhite: "#fff",
        grey: "#888",
      },
      boxShadow: {
        sm: "3px 8px 14px 0px rgba(136, 198, 253, 0.19)",
        md: "7px 13px 14px 0px rgba(116, 177, 232, 0.24)",
      },
      backgroundImage: {
        grBlue: "linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)",
        bg_mob: "url('/images/bg-mob.webp')",
        bg_tab: "url('/images/bg-tab.webp')",
        bg: "url('/images/bg.webp')",
        hero_desc: "url('/images/hero-desc.webp')",
      },
      spacing: {
        "0-sm": "4px",
        "0-md": "8px",
        "1-xs": "10px",
        "1-sm": "12px",
        "1-md": "14px",
        "1-lg": "16px",
        "1-xl": "18px",
        "2-xs": "20px",
        "2-sm": "22px",
        "2-md": "24px",
        "2-lg": "26px",
        "2-xl": "28px",
        "3-xs": "30px",
        "3-sm": "32px",
        "3-md": "34px",
        "3-lg": "36px",
        "3-xl": "38px",
        "4-xs": "40px",
        "4-sm": "42px",
        "4-md": "44px",
        "4-lg": "46px",
        "4-xl": "48px",
        "5-xs": "50px",
        "5-sm": "52px",
        "5-md": "54px",
        "5-lg": "56px",
        "5-xl": "58px",
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "26px",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
