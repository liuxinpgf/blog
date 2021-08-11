module.exports = {
  title: '小宇的blog',
  description: 'up',
  head: [
    ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico`}]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: '.vuepress/dist',
  themeConfig: {
    sidebar: [
      {
        title: '目录',
        collapsable: false,
        path: '/SUMMARY.md'
      }, {
        title: 'Hystrix',
        collapsable: false,
        children: [
          // '/hystrix/',
        ]
      }
    ]
  }
}
