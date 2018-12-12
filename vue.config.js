module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/const/common.scss";',
      },
    },
  },
};
