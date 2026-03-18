import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  children 
}) => {
  const fullCanonicalUrl = canonicalUrl ? `https://www.daorffo.com${canonicalUrl}` : 'https://www.daorffo.com';
  const defaultOgImage = "https://www.daorffo.com/resources/MainPage/Views/MainView/bg-desktop.webp";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
      
      {children}
    </Helmet>
  );
};

export default SEO;
