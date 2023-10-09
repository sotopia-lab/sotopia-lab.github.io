import { Providers } from '@/components/Providers'

export function withProviders(fn: any) {
  return function withPage(page: any) {
    return <Providers pageProps={page.props}>{fn(page)}</Providers>
  }
}
