/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      'xxs': {max: '320px'},
      // => @media (max-width: 320px) { ... }

      'xs': {max: '639px'},
      // => @media (max-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    
    },
    extend: {
      fontFamily:{
        "instrument":['Instrument Sans', 'sans-serif']
      }
    },
    colors:{
      'purple':{
        'light':'#beadff',
        DEFAULT:'#633cff',
        'lighter': '#efebff'
      },
      'grey':{
        'darker': '#333333',
        DEFAULT:'#737373',
        'lighter':'#d9d9d9'
      },
      'white':{
        DEFAULT:'#ffffff',
        'lighter':"#fafafa"
      },
      'red':'#ff3939'
    }
  },
  plugins: [],
}

