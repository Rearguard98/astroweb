import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: '/',
    },
    {
      text: 'Tentang Saya',
      href: '/#tentang',
    },
    {
      text: 'Pengalaman',
      href: '/#pengalaman',
    },
    {
      text: 'Portfolio',
      href: '/#portfolio',
    },
    {
      text: 'Blog',
      href: '/#blog',
      links: [
        {
          text: 'Artikel',
          href: getBlogPermalink(),
        },
        {
          text: 'Tutorial',
          href: getPermalink('tutorial', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
};

export const footerData = {
  
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/arrosyidalayubi' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/arrosyid.a/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/ayubirosyid/' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/arrosyid-al-ayubi-b02521141' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    All rights reserved.
  `,
};
