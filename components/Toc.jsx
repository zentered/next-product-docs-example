import React from 'react'
import { Link } from 'react-scroll'

export default function Toc({ contents }) {
  return (
    <div className="hidden xl:block w-64">
      <div className="sticky top-4">
        <div className="flex flex-col flex-grow bg-gray-50 overflow-y-auto rounded-lg">
          <div className="flex items-center flex-shrink-0 px-2 pb-8">
            <div className="flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                <h4 className="text-gray-800 text-lg font-semibold mt-6">
                  Table of Contents
                </h4>
                <ul>
                  {contents &&
                    contents.map((item) => {
                      return (
                        <li key={item.slug}>
                          <Link
                            activeClass="bg-pink-400 text-white font-bold hover:text-white hover:bg-pink-600 "
                            className={`pl-${
                              item.depth * 2
                            } w-full cursor-pointer inline-flex items-center px-3 py-2 text-sm leading-4 font-medium`}
                            to={item.slug}
                            hashSpy={true}
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                            delay={10}
                          >
                            <svg
                              className="-ml-0.5 mr-2 h-2 w-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                              <path
                                fillRule="evenodd"
                                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item.text.replace(/`/g, '')}
                          </Link>
                        </li>
                      )
                    })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
