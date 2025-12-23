import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#3B496E",
          "navy-dark": "#2A3550",
          "navy-light": "#5A6A8A",
          red: "#C6462D",
          "red-dark": "#A23823",
          "red-light": "#F9E8E4",
          "off-white": "#FEF6EB",
          "light-blue": "#E8ECF2",
          charcoal: "#3D3D3D",
          white: "#FFFFFF",
        },
      },
    },
  },
};

export default config;
