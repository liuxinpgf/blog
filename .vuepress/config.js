module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
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
        title: '前言',
        collapsable: false,
        children: [
          '/introduction/about-me',
          '/introduction/about-book',
          '/introduction/about-the-fenix-project',
        ]
      },
      {
        title: 'a',
        // collapsable: false,
        children: [
          '/xinyu/a',
        ]
      }
    ]
  }
}
