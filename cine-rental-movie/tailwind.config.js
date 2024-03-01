/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  /**
   * tell your application which mode you are using (light/dark)
   * you should toggle them so make a context
   */
  darkMode: "class",

  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: "#00d991",
        dark: "#171923",
        light: "#fff",
        body: "#1d1e28",
      },
    },
  },
  plugins: [],
};
