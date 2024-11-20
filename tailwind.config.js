/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          500: '#0066CC',
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429'
        },
        secondary: {
          500: '#00B67A',
          600: '#009161',
          700: '#006d49',
          800: '#004830',
          900: '#002418'
        },
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#666666',
          600: '#808080',
          700: '#999999',
          800: '#b3b3b3',
          900: '#cccccc'
        },
        light: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4'
        }
      }
    }
  },
  plugins: []
};