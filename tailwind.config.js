// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          whitee: '#ffffff',
          blackk: '#000000',
          softBg: '#f0f0f0',
          softTextColor: '#626262',
          grayBack: '#e2e1e1',
          btnBlue: '#217bbc',
          btnBlueHover: '#259df4',
          btnBlueFocus: '#0081dd',
          boxCont: '#cacaca',
        },
        // Dark theme colors
        dark: {
          white: '#ffffff',
          black: '#000000',
          softBg: '#222222',
          softTextColor: '#cccccc',
          grayBack: '#333333',
          btnBlue: '#217bbc',
          btnBlueHover: '#259df4',
          btnBlueFocus: '#0081dd',
          boxCont: '#4a4a4a',
        },
      },
    },
  },
  plugins: [],
}
