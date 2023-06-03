const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'http://addyscorner.tech' }); // Replace with your app's root URL

  // Add URLs to the sitemap
  sitemap.write({ url: '/' });
  sitemap.write({ url: '/about' });
  // Add more URLs as needed

  sitemap.end();

  const writeStream = createWriteStream('public/sitemap.xml');

  sitemap.pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
};

generateSitemap()
  .then(() => {
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
