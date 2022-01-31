module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  webpack: (config, options) => {
    config.node = {
      fs: 'empty',
      module: 'empty',
    };

    return config;
  },
  useFileSystemPublicRoutes: false,
  important: true,
}