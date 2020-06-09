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
    Main: '/:permalink',
    Art: [
      {
        path: '/art',
        component: './src/templates/Work.vue'
      }
    ],
    Web: [
      {
        path: '/web',
        component: './src/templates/Work.vue'
      }
    ]
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
        path: 'content/web.md',
        typeName: 'Web',
        remark: {
          plugins: []
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/art.md',
        typeName: 'Art',
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
  ],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
