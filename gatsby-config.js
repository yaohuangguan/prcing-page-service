/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Atlas网站搭建`,
    description: `I can offer you best web services with high quality and low price.`,
    siteUrl: `https://web.yaobaiyang.com/`,
    home: {
      title: `Hi! It's Atlas`,
      description: `Atlas 网站搭建平台的使命就是让开发与部署变得简单，让所有人都可以拥有自己的网站。并且为了带给你永久的，样式与功能定制化，性能强劲的现代Web应用。`,
      whyme:`Web开发中存在大量的技术和术语：使用DNS和SSL进行域设置？使用TCP和HTTP进行网络请求与转发？使用CDN和Edge Networks进行缓存？前端框架不清楚？后台服务器接口不会写？ 这是一个庞大的清单。它造成了很多复杂性。\n 然而你不需要担心这一切，我通过自身的不断学习和不停地实践，摸索出了一套属于现代Web应用的全面的解决方案。可以让开发者快速地部署，并且得到云服务器快速响应。让无论是开发者或是小白或是创业者都可以很轻松地拥有自己的网站，宣传自己的产品。`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-164743872-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Yao web service`,
        short_name: `Sam`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-offline`,
  ],
}
