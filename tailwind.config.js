/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '22.5': '5.625rem', // 5.625rem = 90px (если базовый размер шрифта 16px)
        '18': '4.5rem',
        '55': '13.75rem',
        '30': '7.5rem',
         '4.5': '1.125rem',
         '35': '8.75rem',
         '17': '4.25rem',
      },
      zIndex: {
        '-1': '-1', // Добавляем кастомное значение для z-index
      },
    },
  },
  plugins: [],
}