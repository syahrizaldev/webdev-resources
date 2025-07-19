export default {
   semi: true,
   tabWidth: 3,
   useTabs: false,
   singleQuote: true,
   endOfLine: 'crlf',
   trailingComma: 'all',
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
