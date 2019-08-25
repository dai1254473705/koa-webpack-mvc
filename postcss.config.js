module.exports = ({ file, options, env }) => {
    return ({
      parser: false,
      plugins: {
        'postcss-import': { root: file.dirname },
        'postcss-preset-env': {
          browsers: ['last 10 versions','Firefox >= 20','Android >= 4.0','iOS >= 8'],
          autoprefixer: { grid: true },
        },
        'cssnano': {}
      }
  });
}
