module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}","./src/**/*.{js,ts,jsx,tsx,html,mdx}",],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {50: "#f8faff",100: "#f5f5f5",200: "#eaeaea",500: "#9a9aa9",600: "#848484",900: "#231f20",
          "50_01": "#fafafb",
          "500_01": "#999ca0",
          "200_01": "#ebebeb",
          "100_01": "#f2f2f2",
        },
        indigo: { A100_6c: "#aba8ff6c", A200: "#605bff", A200_7e: "#605bff7e" },
        red: { 500: "#eb4335", 700: "#d33030" },
        blue: { 700: "#346ad4", A200: "#4285f4", A200_01: "#5b92ff" },
        green: {
          600: "#34a853",
          800: "#107c41",
          900: "#185c37",
          "600_01": "#21a366",
        },
        black: {
          900: "#000000",
          "900_87": "#03022987",
          "900_01": "#030229",
          "900_66": "#00000066",
        },
        teal: { 400: "#33c481" },
        amber: { 500: "#fbbc05" },
        white: { A700_00: "#ffffff00", A700_01: "#ffffff", A700: "#fcfcff" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        nunito: "Nunito",
        figtree: "Figtree",
        lato: "Lato",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#aba8ff6c,#aba8ff6c)",
      },
      boxShadow: { bs: "0px 0px  1px 0px #00000066" },
    },
  },
  plugins: [require("@tailwindcss/forms")]
};
