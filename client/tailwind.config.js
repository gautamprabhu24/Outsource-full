/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'amaze':['Amazon Ember','Arial','sans-serif']
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss",
  require('flowbite/plugin')
  ],

}

