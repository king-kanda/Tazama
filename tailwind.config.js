module.exports = {
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
      colors: {
        navy: '#001F3F',
        teal: '#39CCCC',
        white: '#FFFFFF',
        yellow: '#FFDC00',
        red: '#FF4136',
        gray : '#F1F1F1',
        grey : '#D9D9D9',
        black : '#000000',
      },
    },
  },
  plugins: [],
};
