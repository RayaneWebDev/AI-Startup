/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontWeight : {
      link : '500',
      bold : '700',
      extraBold : '900',
      medium : '700',
      normal : '300'
    },
    fontFamily:{
     inter : ['Inter', 'sans-serif']
    },
    extend: {
      colors : {
       proBotton : 'hsl(263,100,64)',
        
      },
      backgroundImage: {
        'heading-gradient': 'linear-gradient(to right, #ffffff, #B372CF)',
         'efforts-gradient' : 'linear-gradient(to right, #190D2E, #020103)',
         'header-button': 'linear-gradient(to right, hsla(263, 100%, 64%, 0.4), hsla(263, 57%, 38%, 0.4))',
         'pricing-gray' : 'linear-gradient(to right, hsla(0, 0%, 24%, 0.4) , hsla(0,0%, 64%, 0.4))'
      },

      boxShadow: {
        'inner-white': 'inset 0 0 6px 3px rgba(255, 255, 255, 0.25)',
      },

    },
  },
  plugins: [],
}

