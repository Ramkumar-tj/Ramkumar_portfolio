module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        flash: 'flash 0.3s ease-out', // Define the duration and timing function
      },
      keyframes: {
        flash: {
          '0%': {
            transform: 'scale(1)', // Start at normal size
            opacity: '1', // Full opacity
          },
          '50%': {
            transform: 'scale(2)', // Expand the effect
            opacity: '0.3', // Fade out
          },
          '100%': {
            transform: 'scale(1)', // Return to normal size
            opacity: '0', // Fully fade out
          },
        },
      },
    },
  },
  plugins: [],
};
