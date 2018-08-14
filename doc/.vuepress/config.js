module.exports = {
    base: '/vue_apicloud/',
    title: 'vue_apicloud',
    description: '利用vue apicloud，快速构建一个app',
    ga: 'UA-81240080-1',
    serviceWorker: false,
    markdown: {
      html: true,
      config: md=> {
        md.use((value)=> {
          return value;
        })
      }
    },
    themeConfig: {
      nav: [
        { text: 'GitHub', link: 'https://github.com/xiaoqiang730730/vue_apicloud' },
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
