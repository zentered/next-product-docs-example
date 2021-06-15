import Head from 'next/head'
import { pageProps, staticPaths } from '@opstrace/next-product-docs/serialize'
import Documentation from '@opstrace/next-product-docs'

import Sidebar from 'components/Sidebar'
import Toc from 'components/Toc'

export default function Docs({ title, source, sidebarRoutes, tocHeadings }) {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container">
        <div className="md:flex max-w-7xl mx-auto">
          <Sidebar routes={sidebarRoutes} />
          <main className="md:flex-1 ml-4 xl:ml-8 pr-4 sm:pr-0">
            <Documentation source={source} />
          </main>
          <Toc contents={tocHeadings} />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await staticPaths()
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await pageProps(ctx))
    }
  }
}
