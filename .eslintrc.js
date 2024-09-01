module.exports = {
  root: true,
  extends: [
    '@react-native', // Reglas recomendadas por React Native
    'plugin:prettier/recommended', // Integra Prettier con ESLint
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto', // Para manejar errores de 'CRLF' en Windows
      },
    ],
  },
};
