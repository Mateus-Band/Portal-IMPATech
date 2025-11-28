module.exports = {
  darkMode: "class",
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        impaBlue: "#1e4fa8",
      },
    },
  },
  plugins: [],
}