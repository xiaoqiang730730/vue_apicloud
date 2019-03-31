var path = require('path');

module.exports = {
    base: '/vue_apicloud/',
    title: 'vue_apicloud',
    description: '利用vue apicloud，快速构建一个app',
    plugins: [
      require('./baidu/index'),
      [ 
        '@vuepress/google-analytics',
        {
          'ga': 'UA-81240080-1' // UA-00000000-0
        }
      ],
      '@vuepress/nprogress'
    ],
    serviceWorker: true,
    markdown: {
      html: true,
      config: md=> {
        md.use((value)=> {
          return value;
        })
      }
    },
    theme: path.resolve(__dirname, 'theme/index.js'),
    themeConfig: {
      nav: [
        { text: 'GitHub', link: 'https://github.com/xiaoqiang730730/vue_apicloud' },
        { text: '阿里内推', link: 'http://xiaoqiang730730.github.io/neitui/' },
      ],
      editLinks: true,
      docsDir: 'doc',
      sidebar: {
          '/': [
            '',
            'oneweekoneapp',
            'appstore',
            'share',
            'push'
          ]
        }
    }
}
