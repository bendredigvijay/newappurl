const { DefinePlugin } = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  webpack: function (config, env) {
    // Add plugins configuration
    config.plugins.push(
      new DefinePlugin({
        'process.env.GIT_COMMIT': JSON.stringify(gitRevisionPlugin.commithash()),
        'process.env.GIT_VERSION': JSON.stringify(gitRevisionPlugin.version()),
        'process.env.GIT_BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
        'process.env.BUILD_TIME': JSON.stringify(new Date().toISOString()),
      })
    );

    // Add historyApiFallback for React Router
    config.devServer = {
      ...config.devServer,
      historyApiFallback: true,
    };

    return config;
  },
};
