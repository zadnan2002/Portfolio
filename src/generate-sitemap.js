const sitemap=require('sitemap');
const fs=require('fs');
const hostname='https://addyscorner.tech';

const urls=[
    {url: '/', changefreq: 'daily', priority: 1},
    {url: '/about', changefreq: 'daily', priority: 0.5},

]

const sitemapInstance=sitemap.createSitemap({
    hostname: hostname,
    urls: urls,
});

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());