module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#474a52',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#f2f2f2',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?w=900&t=st=1664210668~exp=1664211268~hmac=7e00e0a523f647ff7910c2cba836fc27e2f414f074678a37e1c95356f6397893')",
      },
    },
  },
  plugins: [],
}