import type { Config } from 'tailwindcss'
const { colors : defaultColors } = require("tailwindcss/defaultTheme")
const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(249, 99%, 64%)",
      "200" : "hsl(278, 94%, 30%)",
      "300" : "hsl(0, 100%, 66%)",
      "400" : "hsl(270, 3%, 87%)",
      "500" : "hsl(279, 6%, 55%)",
      "600" : "hsl(278, 68%, 11%)"
    }
  }


}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "mobile" : "url('/images/bg-main-mobile.png')",
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
