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
        opengraph_default_alt:
            'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
        twitterSite: '', // i.e. @site - twitter profile of the site
        twitterCreator: '', // i.e. @author -  twitter profile of the site
        mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
    },
    blog: {
        // this is for the rss feed
        name: 'My great Web Development Blog',
        description:
            'Tell the word what you are writing about in your blog! It will show up on feed readers.'
    },
    pagination: {
        itemsPerPage: 20
    },
};
