export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LIRN Group',
  url: 'https://lirn.co.in',
  logo: 'https://lirn.co.in/logo.png',
  description: 'Family-founded process engineering and industrial fabrication firm based in Hyderabad, India.',
  sameAs: [],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Telangana',
    addressLocality: 'Hyderabad',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-99999999999',
    email: 'info@lirn.co.in',
    availableLanguage: ['en', 'hi'],
  },
}

export function productSchema(product: {
  name: string
  description: string
  category: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    url: `https://lirn.co.in${product.url}`,
    manufacturer: {
      '@type': 'Organization',
      name: 'LIRN Group',
      url: 'https://lirn.co.in',
    },
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  category: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.category,
    provider: {
      '@type': 'Organization',
      name: 'LIRN Group',
      url: 'https://lirn.co.in',
    },
    areaServed: 'IN',
    availableLanguage: 'en',
  }
}

export function caseStudySchema(caseStudy: {
  title: string
  description: string
  slug: string
  tag: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.description,
    url: `https://lirn.co.in/case-studies/${caseStudy.slug}`,
    author: {
      '@type': 'Organization',
      name: 'LIRN Group',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LIRN Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lirn.co.in/logo.png',
      },
    },
    articleSection: caseStudy.tag,
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LIRN Group',
    image: 'https://lirn.co.in/logo.png',
    description: 'Industrial engineering and equipment manufacturing',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Telangana',
      addressLocality: 'Hyderabad',
    },
    telephone: '+91-99999999999',
    url: 'https://lirn.co.in',
    priceRange: '₹',
  }
}
