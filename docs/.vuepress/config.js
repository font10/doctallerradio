module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentacio', link: '/tablets/' },
      { text: 'Base de dades taller radio', link: 'http://taller-radio-e828c.firebaseapp.com/' },
    ],
    sidebar: [
      {
        title: 'Tablets/GIS/Compact',   // required
        path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/tablets/',
          '/GIS/',
          '/compact/',
        ]
      },
      {
        title: 'Group 2',
        children: [
          '/prova/',
        ]
      }
    ]
  }
}
