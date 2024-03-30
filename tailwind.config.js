/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors:{
      "Very-Dark-Magenta": "hsl(300, 43%, 22%)",
      "Soft-Pink": "hsl(333, 80%, 67%)",
      "Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
      "Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
      "white": "hsl(0, 0%, 100%)",
    },
    fontFamily:{
      "League-Spartan": ['League Spartan', 'sans-serif'],
    },
    backgroundImage:{
      "pattern-top-mobile": "url('../images/bg-pattern-top-mobile.svg')",
      "pattern-top-desktop": "url('../images/bg-pattern-top-desktop.svg')",
      "pattern-bottom-mobile": "url('../images/bg-pattern-bottom-mobile.svg')",
      "pattern-bottom-desktop": "url('../images/bg-pattern-bottom-desktop.svg')",
    },
    extend: {
      
    },
  },
  plugins: [],
}

