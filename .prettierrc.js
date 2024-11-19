module.exports = {
   semi: true,
   singleQuote: true,
   trailingComma: 'all',
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
