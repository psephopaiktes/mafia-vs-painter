module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/const/variables.scss";',
      },
    },
  },
};
