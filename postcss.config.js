module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-import'),
    require('postcss-nesting'),
    require('cssnano')({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    }),
  ],
};
