import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class"; // Enable dark mode by class
export const theme = {
  extend: {
    fontFamily: {
      mono: ["Source Code Pro", "monospace"],
    },
    fontSize: {
      "4xl": "1.875rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "5rem",
      "9xl": "6rem",
      "10xl": "7rem",
      "11xl": "8rem",
    },
    spacing: {
      5: "1.25rem",
      10: "2.5rem",
      15: "3.75rem",
      20: "5rem",
      25: "6.25rem",
      30: "7.5rem",
      35: "8.75rem",
      40: "10rem",
      45: "11.25rem",
      50: "12.5rem",
    },
    opacity: {
      50: "0.5",
      75: "0.75",
      100: "1",
    },
    borderRadius: {
      full: "9999px",
    },
    colors: {
      dark: "#000000",
      light: "#ffffff",
    },
    animation: {
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
    },
    keyframes: {
      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
    },
  },
};
export const plugins = [addVariablesForColors];
