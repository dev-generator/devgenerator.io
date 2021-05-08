import { HeartIcon } from '@heroicons/react/outline'

export function Sponsor() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-50 md:text-4xl">
        <span className="block">Looking to Support?</span>
        <span className="block text-purple-600">Support the site if it benifits you or saved you time!</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="https://github.com/sponsors/chiefpansancolt?o=esb"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            <HeartIcon className="-ml-1 mr-3 h-5 w-5 text-pink-500" />
            Sponsor
          </a>
        </div>
      </div>
    </div>
  )
}