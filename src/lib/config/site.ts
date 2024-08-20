import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'bl4ckh4ck.github.io',
  title: 'Bl4ckH4ck',
  subtitle: 'Tech Blog on Cybersecurity and Programming Insights',
  lang: 'es-ES',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Rompelhd',
    status: '🌸',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  themeColor: '#3D4451'
}
