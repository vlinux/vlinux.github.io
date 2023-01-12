import type { UserConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

/**
 * User Config
 * do not use export const
 */
const config: UserConfig<ThemeUserConfig> = {
  lang: 'zh-CN',
  title: '运维之境',
  author: {
    name: '卷饼',
    avatar: 'https://cos.vlinux.cn/vlinux-logo/user.jpg',
    status: {
      emoji: '🥺',
    },
  },
  subtitle: '如果你太在意别人的话',
  description: '那你终将成为别人的一条裤衩',
  url: 'https://www.vlinux.cn',
  social: [
    {
      name: 'QQ 38867033',
      link: 'https://wpa.qq.com/msgrd?v=3&uin=38867033&site=qq&menu=yes&jumpflag=1',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/vlinux',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '杂物堆 Repo',
      link: 'https://repo.vlinux.cn/',
      icon: 'i-ri-download-cloud-2-fill',
      color: '#0088CC',
    },
    {
      name: '微信公众号',
      link: 'https://cos.vlinux.cn/www-vlinux-cn-blog-img/WechatIMG18.jpeg',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'Music',
      link: 'https://music.kococ.cn/',
      icon: 'i-ri-speaker-fill',
      color: '#E6162D',
    },
    {
      name: 'E-Mail',
      link: 'mailto:ilinux@88.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Games',
      link: 'https://www.vlinux.cn/play',
      icon: 'i-ri-gamepad-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    algolia: {
      enable: true,
      appId: 'J0AB4BDWYY',
      apiKey: 'af4ee176f36490f6b1846fe8add6dd03',
      indexName: 'valaxy_blog',
    },
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cos.vlinux.cn/www-vlinux-cn-blog-img/WechatIMG203.jpeg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cos.vlinux.cn/www-vlinux-cn-blog-img/WechatIMG205.jpeg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cos.vlinux.cn/www-vlinux-cn-blog-img/WechatIMG204.jpeg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '运维之境',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '我的小账单',
        url: '/bill',
        icon: 'i-ri-money-cny-circle-line',
        color: '#FFD700',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '豫ICP备20001100号-3',
      },
    },
    bg_image: {
      enable: true,
      dark: 'https://cos.vlinux.cn/vlinux-logo/www-vlinux-cn-background-dark.jpeg',
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },

  comment: {
    enable: true,
  },

  addons: [
    addonWaline({
      serverURL: 'https://waline.vlinux.cn',
    }),
  ],
}

/**
 * add your icon to safelist
 * if your theme is not yun, so you can add it by yourself
 */
config.themeConfig?.pages?.forEach((item) => {
  config.unocss?.safelist?.push(item?.icon)
})

export default config
