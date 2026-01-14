module.exports = {
  darkMode: 'class', // Usa classe .dark no HTML para modo escuro
  content: [
    "./app/views/**/*.html.erb",
    "./app/javascript/**/*.js",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        impaBege: "#CCC4AF", // Bege IMPA Tech
        impaPink: "#FF8AEF", // Rosa IMPA Tech
        impaOrange: "#FFC555", // Laranja IMPA Tech
        impaYellow: "#ECF47A", // Amarelo IMPA Tech
        impaGreen: "#BEFF8B", // Verde IMPA Tech
      },
    },
  },
  plugins: [],
}