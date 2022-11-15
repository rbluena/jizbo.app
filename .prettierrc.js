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
    '^~/assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
