export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://zhuhao.me' : ''
export const baseEmail = 'zhuhao@cmu.com'

export const defaultSEO = {
  title: 'sotopia',
  description: 'PhD student at Carnegie Mellon University.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Hao Zhu',
    images: [
      {
        url: `${baseUrl}/portrait.png`,
        alt: 'Hao Zhu',
      },
    ],
  },
  twitter: {
    handle: '@_Hao_Zhu',
    site: '@_Hao_Zhu',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}
