const path = require('path');
const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  content: [fromRoot('./app/**/*.+(js|ts|tsx|mdx|md)')],
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe\\ UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira\\ Sans',
        'Droid\\ Sans',
        'Helvetica\\ Neue',
        'sans-serif',
      ],
    },
    extend: {},
  },
  plugins: [],
};
