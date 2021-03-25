const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.lime,
      },
      backgroundImage: (theme) => ({
        "front": `url('/static/img/road.jpg');   
                         background-repeat: no-repeat;
                         background-position: center; 
                         background-size: cover;`,
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
