module.exports = {
  transformIgnorePatterns: [
    '/node_modules/(?!uuid)/',
  ],
  transform: {
    '^.+\\.js$': ['babel-jest', {
      configFile: false,
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    }],
  },
};
