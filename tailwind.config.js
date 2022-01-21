//prettier-ignore
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'faded-black':'#07070C',
      'light-purple':'#d04bFF',
      'dark-purple':'#6c63ff',
      'purple':'#915BFF',
      'white':'#f2f2f2',
      'light-gray':'#b9b9ba',
      'gray':'#16161A',
      'black':'#000000'
    },
    screens: {
      'sm':'450px',
      'md': '850px',
    },
    extend: {},
  },
  plugins: [],
};
