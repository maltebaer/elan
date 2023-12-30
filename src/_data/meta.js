module.exports = {
    url: process.env.URL || 'http://localhost:8080',
    siteName: 'ELAN',
    siteDescription:
        'We are a Berlin-based, international constellation of creatives developing customized events and experiences for clients and brands.',
    siteType: 'Person', // schema
    locale: 'en_EN',
    lang: 'en',
    skipContent: 'Skip to content',
    author: 'Malte Bär',
    authorEmail: 'maltebaer@posteo.de',
    authorWebsite: 'https://github.com/maltebaer',
    themeColor: '#16191d',
    themeBgColor: '#f8f9fa',
    meta_data: {
        opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    },
    pagination: {
        itemsPerPage: 20
    },
};
