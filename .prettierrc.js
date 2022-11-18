module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',

  importOrder: [
    '^@app/screens/(.*)$',
    '^@app/components/(.*)$',
    '^@app/styles/(.*)$',
    '^@app/utils/(.*)$',
    '^@app/constants/(.*)$',
    '^~/assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
};
