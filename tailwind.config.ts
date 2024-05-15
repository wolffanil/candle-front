import { withUt } from "uploadthing/tw";

module.exports = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cruinn: ["var(--font-cruinn)"],
        miama: ["var(--font-miama)"],
      },
      boxShadow: {
        custom: "5px 0px 50px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        hoar: {
          100: "#E5DBD0",
          200: "#E8DDD3",
          300: "#BEAB9B",
          400: "#B1A293",
          500: "#9E8875",
          600: "#614A37",
        },
      },
    },
  },
  plugins: [],
});
