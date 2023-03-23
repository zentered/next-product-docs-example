import React from 'react'
import Link from 'next/link'

function ListItems({ routes }) {
  if (routes) {
    return routes.map((r) => {
      if (!r.path) {
        return (
          <li key={r.title}>
            <h4 className="text-gray-500 uppercase font-bold">{r.title}</h4>
            <ul>
              <ListItems routes={r.routes} />
            </ul>
          </li>
        )
      } else {
        return (
          <li key={r.title}>
            <Link
              key={r.path}
              href={r.path}
              className="flex py-2 pl-2 text-sm font-medium text-gray-600 transition ease-in-out duration-150"
            >
              {r.title}
            </Link>
          </li>
        )
      }
    })
  } else {
    return <></>
  }
}

export default function Sidebar({ routes }) {
  return (
    <div className="w-64">
      <div className="flex flex-col flex-grow bg-gray-50 overflow-y-auto rounded-lg mt-4">
        <div className="flex items-center flex-shrink-0 px-2 pb-8">
          <div className="flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1 mt-6">
              {routes &&
                Object.keys(routes).map((route, idx) => {
                  const obj = routes[route]
                  return (
                    <div key={`sidebar-${idx}`}>
                      <h3 className="text-gray-800 uppercase font-bold">
                        {obj.title}
                      </h3>
                      <ul>
                        <ListItems routes={obj.routes} />
                      </ul>
                    </div>
                  )
                })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
