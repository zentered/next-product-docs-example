import Link from 'next/link'

const features = [
  {
    name: 'Variable Injection',
    description:
      'Replace text in code snippets for an amazing copy & paste experience.'
  },
  {
    name: 'Code Blocks',
    description: 'Supports all languages, with copy button'
  },
  {
    name: 'Asset Optimization',
    description: 'Compress and host your own images from your docs repo.'
  },
  {
    name: 'Link Optimization',
    description:
      'Separate handling for internal and external links with SEO optimization.'
  }
]

export default function Homepage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            All-In-One Product Documentation for your Open Source Project
          </h2>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-x-10">
            <Link href="http://opstrace.com/blog/product-documentation-with-nextjs">
              <a className="border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 py-4 px-10">
                Blog Article
              </a>
            </Link>
            <Link href="https://github.com/zentered/next-product-docs">
              <a className="border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-green-700 py-4 px-10">
                Component Repo
              </a>
            </Link>
            <Link href="/docs">
              <a className="border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 py-4 px-10">
                Docs Demo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
