import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#d00000",
        secondary: "#7b1a1a",
      },
      spacing: {
        "50-percent": "50%",
      },
      outline: {
        none: "2px solid transparent",
      },
    },
  },
  plugins: [],
} satisfies Config;
