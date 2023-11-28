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
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        grayD9: '#d9d9d9',
        gray1B: '#1b1b1b',
        gray7F: '#7f7f7f',
        grayBG: '#CCCCCC',
        blueB7Shop: '#006EDF',
        greenButton: '#64C914',
      }
    },
  },
  plugins: [],
}
export default config
