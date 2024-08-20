import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'bl4ckh4ck.github.io',
  title: 'Bl4ckH4ck',
  subtitle: 'Tech Blog on Cybersecurity and Programming Insights',
  lang: 'es-ES',
  description: 'Powered by SvelteKit/Urara',
  author: {
    //avatar: '/assets/maskable@512.png',
    avatar: 'https://avatars.githubusercontent.com/u/75935831?s=400&u=f1af2734a6ae9db95357df4bd856b92e1c403a43&v=4',
    name: 'Rompelhd',
    status: '🥵',
    bio: '👨‍💻 Hacker and software developer based in Gijón, Spain. Specializing in Python and C++ projects. Always tinkering and building something new. Connect with me'
  },
  themeColor: '#3D4451'
}
