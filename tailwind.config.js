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
          // lighter
          100: "#B7D8F0",
          200: "#899ECD",
          // light
          300: "#899ECD",
          // base
          400: "#3B74FC",
          500: "#3B74FC",
          // dark
          600: "#3A5DAE",
          700: "#3A5DAE",
          // darker
          800: "#353D5F",
          900: "#2F3654"
        },
        gray: {
          // white
          100: "#FFFFFF",
          // lightest
          200: "#F6F8FA",
          // lighter
          300: "#E8E8E8",
          // light
          400: "#CDCFD1",
          // base
          500: "#B3B5B8",
          // dark
          600: "#93999E",
          // darker
          700: "#6D7176",
          // darkest
          800: "#444C59",
          // black
          900: "#2E333C"
        },
        red: {
          // lighter
          100: "#F2BEB5",
          200: "#F2BEB5",
          // light
          300: "#F0948B",
          // base
          400: "#F65747",
          500: "#F65747",
          600: "#F65747",
          // dark
          700: "#CE6A51",
          // darker
          800: "#D7351C",
          900: "#D7351C"
        },
        green: {
          // lighter
          100: "#DEF7EC",
          200: "#DEF7EC",
          // light
          300: "#72D0A3",
          // base
          400: "#21BC9C",
          500: "#21BC9C",
          600: "#21BC9C",
          // dark
          700: "#17A688",
          // darker
          800: "#07804D",
          900: "#07804D"
        },
        yellow: {
          // lighter
          100: "#FAF4EA",
          200: "#FAF4EA",
          // light
          300: "#F4E5B1",
          // base
          400: "#FAD860",
          500: "#FAD860",
          600: "#FAD860",
          // dark
          700: "#F6AF47",
          // darker
          800: "#956419",
          900: "#956419"
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
  }
};
