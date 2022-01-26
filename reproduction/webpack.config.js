module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        loader: "less-loader",
        options: {
          lessOptions:{
            globalVars: {
              "root-entry-name": "default"
            },
            javascriptEnabled: true,
          }
        }
      },
    ],
  },
};
