import Head from 'next/head'
import { pageProps, staticPaths } from '@zentered/next-product-docs/serialize'
import { Documentation } from '@zentered/next-product-docs'

import Sidebar from '../../components/Sidebar'
import Toc from '../../components/Toc'
import theme from '../../utils/vsDark.js'

const remoteDocsOptions = {
  org: 'zentered',
  repo: 'next-product-docs-example',
  branch: 'main',
  docsFolder: 'docs',
  rootPath: 'content'
}

export default function Docs({ title, source, sidebarRoutes, tocHeadings }) {
  if (source === null) return

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
            <Documentation source={source} theme={theme} />
          </main>
          <Toc contents={tocHeadings} />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  console.log('load paths')
  const paths = await staticPaths(remoteDocsOptions)
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  console.log('load page')
  const props = await pageProps(ctx, remoteDocsOptions)
  return { props }
}
