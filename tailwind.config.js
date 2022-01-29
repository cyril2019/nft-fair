//prettier-ignore
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'faded-black':'#07070C',
      'light-purple':'#D04BFF',
      'dark-purple':'#6C63FF',

      'purple':'#915BFF',
      'white':'#f2f2f2',
      'light-gray':'#b9b9ba',
      'gray':'#16161A',
      'black':'#000000',
      'green':'#2F855A',
      'red':'#C53030'
    },
    screens: {
      'sm':'480px',
      'md': '850px',
      'lg':'1000px'
    },
    extend: {},
  },
  plugins: [],
};
