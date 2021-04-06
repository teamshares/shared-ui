/*
 * To load new changes in this file,
 * the Webpack server needs to be restarted.
 * TODO: Support webpack-dev-server livereload
 *
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#e1eff9",
          200: "#b7d8f0",
          300: "#84bafa",
          400: "#539ef8",
          500: "#3b74fc",
          600: "#2c5ed6",
          700: "#3a5dae",
          800: "#29427b",
          900: "#353d5f",
        },
        gray: {
          100: "#ffffff",
          200: "#f6f8fa",
          300: "#e8e8e8",
          400: "#cdcfd1",
          500: "#b3b5b8",
          600: "#93999e",
          700: "#6d7176",
          800: "#444c59",
          900: "#2e333c"
        },
        red: {
          100: "#fcf1ef",
          200: "#f7d7d2",
          300: "#f2beb5",
          400: "#f0948b",
          500: "#f65747",
          600: "#d64e41",
          700: "#d7351c",
          800: "#b92e18",
          900: "#9b2614"
        },
        green: {
          100: "#eef6e8",
          200: "#d4e8c3",
          300: "#72d0a3",
          400: "#21bc9c",
          500: "#17a688",
          600: "#10985f",
          700: "#07804d",
          800: "#05603a",
          900: "#034026"
        },
        yellow: {
          100: "#faf4ea",
          200: "#fef0ad",
          300: "#fce491",
          400: "#fad860",
          500: "#ffc328",
          600: "#f6af47",
          700: "#cf8b23",
          800: "#956419",
          900: "#694712"
        }
      },
      fontFamily: {
        sans: "Inter, Helvetica, Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        serif: "DM Serif Display, Georgia, Times, serif",
        mono: "SFMono-Regular, Menlo, mono",
        display: "DM Serif Display, Georgia, Times, serif",
        body: "Inter, Helvetica, Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      },
      fontSize: {
        "10px": ["0.625rem", "1.5em"],
        "13px": ["0.8125rem", "1.5em"]
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      height: {
        "680px": "680px"
      },
      spacing: {
        15: "3.75rem"
      },
      // Not in Buyout
      transitionProperty: {
        height: "height",
      },
      gridTemplateRows: {
        "7": "repeat(8, minmax(0, 1fr))",
        "12": "repeat(12, minmax(0, 1fr))",
      },
      inset: {
        '-16': '-4rem'
      },
      opacity: {
        '95': '0.95'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
      borderStyle: ["group-hover", "hover", "focus", "active"],
      fill: ["hover", "focus"],
      padding: ["first", "last"],
      textColor: ["active"],
      visibility: ["group-hover", "hover"]
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  experimental: {
    applyComplexClasses: true
  },
  darkMode: "class"
};
