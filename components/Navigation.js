import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'The Team', href: '/#the-team' },
  { name: 'Features', href: '/#features' },
  { name: 'Ruby Gems', href: '/#ruby-gems' },
  { name: 'Node Modules', href: '/#node-modules' },
  { name: 'FAQ', href: '/#faq' },
]

const generators = [
  {
    name: 'Ruby Gem',
    description: 'All Ruby base gems that have a config file generator needed.',
    href: '/#ruby-gems',
    icon: '/img/icons/rubygems.svg',
  },
  {
    name: 'Node Modules',
    description: 'All Node base modules that have a config file generator needed.',
    href: '/#node-modules',
    icon: '/img/icons/nodejs.svg',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">DevGenerator</span>
                    <img
                      className="h-16 w-auto -mt-7"
                      src="/img/logos/Dev Generator Logo.png"
                      alt="DevGenerator Logo"
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-purple-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                <a
                  key="the-team"
                  href="/#the-team"
                  className="font-medium text-gray-700 hover:text-purple-700"
                >
                  The Team
                </a>
                <a
                  key="features"
                  href="/#features"
                  className="font-medium text-gray-700 hover:text-purple-700"
                >
                  Features
                </a>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-purple-700' : 'text-gray-700',
                            'group rounded-md inline-flex items-center text-base font-medium hover:text-purple-700 focus:outline-none'
                          )}
                        >
                          <span>Generators</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-purple-700' : 'text-gray-700',
                              'ml-2 h-5 w-5 group-hover:text-purple-700'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {generators.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md sm:h-12 sm:w-12">
                                      <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="h-10 w-10"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="p-5 bg-gray-50 sm:p-8">
                                <a
                                  href="#"
                                  className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                                >
                                  <div className="flex items-center">
                                    <div className="text-base font-medium text-gray-900">
                                      Generator Dashboard
                                    </div>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Generate a config file based on your needs.
                                  </p>
                                </a>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <a
                  key="faq"
                  href="/#faq"
                  className="font-medium text-gray-700 hover:text-purple-700"
                >
                  FAQ
                </a>
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"></div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-16 w-auto -mt-5 -ml-1"
                      src="/img/logos/Dev Generator Logo.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-purple-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
