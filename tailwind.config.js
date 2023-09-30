/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,.blade.php}"],
  theme: {
    extend: {
      colors: {
        "primary":"var(--primary-color)",
        "secondary":"var(--secondary-color)"
      }
    },
  },
  plugins: [],
};
