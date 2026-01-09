/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#050505",    // Fondo casi negro
          green: "#10b981",   // Verde Hacker
          blue: "#06b6d4",    // Azul Neón
          gray: "#1e293b"     // Paneles de vidrio
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      }
    },
  },
  plugins: [],
}