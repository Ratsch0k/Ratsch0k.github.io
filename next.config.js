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
  useFileSystemPublicRoutes: false,
}