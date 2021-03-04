const staticRoutes = require('./prerender/getStaticRoutes');
const getBlogRoutes = require('./prerender/getBlogRoutes');
const generateSitemap = require('./sitemap/generateSitemap');

const prerenderedRoutes = staticRoutes.concat(getBlogRoutes());
generateSitemap(prerenderedRoutes);

module.exports = prerenderedRoutes;