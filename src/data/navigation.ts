import { NavigationItem } from '../types';

export const mainNavigation: NavigationItem[] = [];

export const footerNavigation = {
  mainSections: [
    {
      title: 'About',
      links: [
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Terms of Use', href: '/terms-of-service' },
        { label: 'Contact Us', href: '/about' },
      ],
    },
  ],
  socialLinks: [
    { label: 'Discord', href: '/discord' },
    // { label: 'Instagram', href: 'https://instagram.com/govph' },
    // { label: 'YouTube', href: 'https://youtube.com/govph' },
  ],
};
