import type { Config } from 'tailwindcss'
const config: Config = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'justin-Color' : '#1C3F80',// Replace with your own color code
        'custom-blue': '#3366FF',
        'custom-red': '#FF5733',
        'custom-green' : '#ADD6E3'
      },
      colors:{
        'custom-black' : '#293B69'
      },
    },
  },
  plugins: [],
}
export default config
