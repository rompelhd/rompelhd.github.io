import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'SrH4ck',
  subtitle: 'H4cking & Programming ',
  lang: 'es-ES',
  description: 'Powered by NodeJS/GithubPages',
  author: {
    name: 'Héctor Sánchez',
    avatar: '/assets/maskable@192.png',
    status: '❄️',
    bio: 'Amante de la CiberSeguridad y de la Programación.'
  },
  themeColor: '#3D4451'
}
