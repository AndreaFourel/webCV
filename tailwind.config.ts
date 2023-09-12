import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "2xsm": "10px",
        xsm: "12px",
        sm: "13px",
        reg: "15px",
        lg: "18px",
        "2xl": "22px",
        "3xl": "25px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "50px",
        "7xl": "70px",
      },
      borderWidth: {
        '250': '250px'
      },
      colors: {
        'dark-green': '#395144',
        'light-green': '#4E6C50',
        'dark-sand': '#AA8B56',
        'light-sand': '#F0EBCE',
      },
      screens: {
        'mdl': '860px',
        '2xl': '1360px',
        '3xl': '1600px',
        '4xl': '1920px'
      },
    },
  },
  plugins: [],
}
export default config
