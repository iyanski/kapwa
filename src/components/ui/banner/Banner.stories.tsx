import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'UI/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success', 'default'],
    },
    icon: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    titleSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'simple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

// === CORE PRACTICAL PATTERNS ===

// 1. Visa Status Banners (Most common use case)
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Visa-Free Entry',
    description:
      'Citizens can enter Philippines visa-free for a stay of 30 days with valid passport and return ticket.',
    icon: true,
    titleSize: 'lg',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Visa Required',
    description:
      'Citizens must obtain a visa before entering Philippines. Please contact the nearest Philippine embassy or consulate.',
    icon: true,
    titleSize: 'lg',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Special Conditions Apply',
    description:
      'Entry may be granted under special conditions for 14 days with specific documentation requirements.',
    icon: true,
    titleSize: 'lg',
  },
};

// 2. Simple Disclaimer Banner (Common for legal/info text)
export const Simple: Story = {
  args: {
    type: 'warning',
    title: 'Disclaimer',
    description:
      'This information is sourced from official government websites and may be subject to change without prior notice.',
    variant: 'simple',
    titleSize: 'md',
    additionalText: 'Last updated: September 28, 2025',
  },
};

// 3. Text-Only Information (Clean layouts)
export const Info: Story = {
  args: {
    type: 'info',
    title: 'System Status',
    description:
      'All government services are currently operational and running smoothly.',
    icon: true,
    titleSize: 'md',
  },
};

// 4. Call-to-Action Banner (Government services)
export const WithButton: Story = {
  args: {
    type: 'default',
    title: 'Government Directory',
    description:
      'Access contact information for Philippine government offices and agencies.',
    cta: {
      label: 'View Directory',
      onClick: () => alert('Viewing directory!'),
      href: '/government/executive',
      variant: 'primary',
      size: 'md',
    },
    titleSize: 'lg',
  },
};

// 5. Dismissible Notification (User interactions)
export const Dismissible: Story = {
  args: {
    type: 'info',
    title: 'New Features Available',
    description:
      'Check out the latest updates to your government services dashboard.',

    cta: {
      label: 'Explore Features',
      onClick: () => alert('Exploring features!'),
      variant: 'primary',
      size: 'md',
    },

    onDismiss: () => alert('Banner dismissed!'),
    titleSize: 'lg',
    variant: 'standard',
  },
};

// === SHOWCASE ALL TYPES ===
export const AllTypes: Story = {
  name: 'All Semantic Types',
  render: () => (
    <div className='space-y-4'>
      <Banner
        type='success'
        title='Success (Green)'
        description='Visa-free entry, successful operations, positive confirmations.'
        icon={true}
        titleSize='lg'
      />
      <Banner
        type='error'
        title='Error (Red)'
        description='Visa required, errors, failed operations.'
        icon={true}
        titleSize='lg'
      />
      <Banner
        type='warning'
        title='Warning (Yellow)'
        description='Special conditions, disclaimers, important notices.'
        icon={true}
        titleSize='lg'
      />
      <Banner
        type='info'
        title='Info (Blue)'
        description='Informational messages, tips, neutral updates.'
        icon={true}
        titleSize='lg'
      />
      <Banner
        type='default'
        title='Default (Gray)'
        description='General content, call-to-action sections.'
        cta={{
          label: 'Take Action',
          onClick: () => alert('Action taken!'),
          variant: 'primary',
          size: 'md',
        }}
        titleSize='lg'
      />
    </div>
  ),
};

// === LAYOUT VARIANTS ===
export const LayoutVariants: Story = {
  name: 'Layout Comparison',
  render: () => (
    <div className='space-y-3'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>
          Standard Variant (with borders)
        </h3>
        <div className='space-y-3'>
          <Banner
            type='info'
            title='Standard with Icon'
            description='This is the standard layout with icon and borders.'
            icon={true}
            titleSize='lg'
          />
          <Banner
            type='default'
            title='Default with Button'
            description='Default layout with call-to-action button.'
            cta={{
              label: 'Learn More',
              onClick: () => alert('Learning more!'),
              variant: 'primary',
              size: 'md',
            }}
            titleSize='lg'
          />
        </div>
      </div>

      <div>
        <div className='space-y-3'>
          <Banner
            type='warning'
            title='Simple Compact'
            description='Compact layout for disclaimers and footnotes.'
            variant='simple'
            titleSize='md'
            additionalText='Perfect for legal text and updates.'
          />
        </div>
      </div>
    </div>
  ),
};
