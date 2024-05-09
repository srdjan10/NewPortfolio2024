/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        RalewaySemiBold: ["Raleway-SemiBold", "sans-serif"],
        RalewayRegular: ["Raleway-Regular", "sans"],
        RalewayExtraLight: ["Raleway-ExtraLight", "sans"],
        RalewayMedium: ["Raleway-Medium", "sans"],
      },
    },
  },
  plugins: [],
};
