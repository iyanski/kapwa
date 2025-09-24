import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SEO from '../../components/SEO';

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: {
    title: string;
    url: string;
    description?: string;
  }[];
}

const SitemapPage: React.FC = () => {
  const sitemapSections: SitemapSection[] = [
    {
      title: 'Main Pages',
      icon: <Home className='h-5 w-5' />,
      links: [
        { title: 'Home', url: '/', description: 'Design Guidelines' },
        {
          title: 'Accessibility',
          url: '/accessibility',
          description: 'Accessibility statement and features',
        },
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <SEO
        title='Sitemap | kapwa.bettergov.ph'
        description=''
        keywords={['sitemap', 'website map']}
      />

      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-white rounded-xl shadow-xs overflow-hidden'>
            <div className='p-6 md:p-8 border-b border-gray-200'>
              <h1 className='text-3xl font-bold text-gray-900'>Sitemap</h1>
              <p className='mt-2 text-gray-800'>
                A complete guide to all pages and services available on
                kapwa.bettergov.ph
              </p>
            </div>

            <div className='p-6 md:p-8'>
              <div className='space-y-12'>
                {sitemapSections.map((section, index) => (
                  <div key={index}>
                    <div className='flex items-center mb-4'>
                      <div className='p-2 rounded-md bg-primary-50 text-primary-600 mr-3'>
                        {section.icon}
                      </div>
                      <h2 className='text-xl font-bold text-gray-900'>
                        {section.title}
                      </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.url}
                          className='group flex flex-col p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors'
                        >
                          <div className='flex items-center justify-between mb-2'>
                            <h3 className='font-medium text-gray-900 group-hover:text-primary-700'>
                              {link.title}
                            </h3>
                            <ChevronRight className='h-4 w-4 text-gray-400 group-hover:text-primary-500' />
                          </div>
                          {link.description && (
                            <p className='text-sm text-gray-800'>
                              {link.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
