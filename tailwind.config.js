/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "970px",
      xl: "1290px",
    },
    extend: {
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      backgroundClip: {
        text: "text",
      },
      flex: {
        1: "1 0 0%",
      },
      colors: {
        blue: {
          20: "#00B7FF",
          50: "#007FFB",
        },
        black: {
          10: "#141414",
          20: "#141313",
        },
        transparent: {
          20: "#F5FAFF",
        },
        gray: {
          10: "#BCC6DA",
          20: "#333",
          30: "#B4C3E3",
          40: "#667085",
          50: "#D9D9D9",
          60: "#dff7ff66",
          70: "#CECECE",
          80: "#626262",
          90: "#D0D5DD",
          100: "#344054",
          300: "rgba(208, 213, 221, 1)",
          500: "rgba(102, 112, 133, 1)",
          600: "rgba(71, 84, 103, 1)",
          700: "rgba(52, 64, 84, 1)",
        },
      },
      boxShadow: {
        light: "0px 0px 16px 0px #FFF",
        light30: "0px 0px 5px 0px rgba(255, 255, 255, 0.30)",
        gray: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      backdropBlur: {
        18: "18px",
      },
      borderColor: {
        blue: {
          20: "rgba(0, 127, 251, 0.20)",
        },
      },
    },
  },
  plugins: [],
};
