// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'DarZouras.com',
  siteUrl: 'https://darzouras.com',
  icon: '/favicon.ico',

  templates: {
    Index: '/',
    Contact: '/contact',
    Blog: '/blog',
    Post: '/blog/:title',
    Tag: '/tag/:id',
    Main: '/:permalink'
  },

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: []
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: []
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/pages/*.md',
        typeName: 'Main',
        remark: {
          plugins: []
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog.md',
        typeName: 'Blog',
        remark: {
          plugins: []
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/contact.md',
        typeName: 'Contact',
        remark: {
          plugins: []
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/home.md',
        typeName: 'Index',
        remark: {
          plugins: []
        }
      }
    },

    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        modulePath: 'src/admin/index.js',
        publicPath: '/admin',
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-146827146-1'
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/': {
            changefreq: 'monthly'
          },
          '/now': {
            changefreq: 'monthly'
          },
          '/uses': {
            changefreq: 'monthly'
          },
          '/contact': {
            changefreq: 'yearly'
          },
          '/blog/*': {
            changefreq: 'weekly'
          }
        }
      }
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          cacheName: "nf-v1",
          routes: ["/", /\.(js|css|png)/],
        },
      },
    },

    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#fef6e9",
          icon_path: "src/assets/icon.PNG",
          name: "DarZouras.com",
          short_name: "DarZouras",
          theme_color: "#856d9d",
          lang: "en",
      },
    },

    /* {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'DarZouras.com',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          manifestPath: 'static/manifest.json',
          disableServiceWorker: true,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'DarZouras',
          themeColor: '#856d9d',
          backgroundColor: '#fef6e9',
          icon: 'src/assets/icon.PNG', // must be provided like 'src/favicon.png'
          msTileImage: '',
          msTileColor: '#856d9d'
      }
    }, */

  ],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
