import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/kapwa/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async config => {
    // Ensure Vite can resolve workspace dependencies
    config.resolve = config.resolve || {};
    return config;
  },
};

export default config;
