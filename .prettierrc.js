module.exports = {
   semi: true,
   singleQuote: true,
   trailingComma: 'all',
   printWidth: 120,
   tabWidth: 3,
   overrides: [
      {
         files: '*.md',
         options: {
            parser: 'markdown',
            proseWrap: 'preserve',
         },
      },
   ],
};
