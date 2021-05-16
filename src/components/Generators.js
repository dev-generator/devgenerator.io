import ReactHtmlParser from 'react-html-parser'
import generators from '@/data/generators'

export default function Generators() {
  return (
    <div>
      {generators.map((group) => (
        <div className={group.background} key={group.name} id={group.id}>
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3">
            <div className={`${group.left ? 'order-first lg:order-last' : ''}`}>
              <h2 className="text-base font-semibold text-purple-600 uppercase tracking-wide">
                Supported Generators
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">{group.name}</p>
              <p className="mt-4 text-lg text-gray-500">{group.description}</p>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              {group.modules.map((generator) => (
                <div key={generator.name}>
                  <dt>
                    <a
                      className={`flex items-center justify-center h-12 w-12 rounded-md shadow-lg ${
                        group.left ? 'bg-white' : 'bg-gray-200'
                      }`}
                      href={generator.link}
                      title={generator.name}
                    >
                      <img
                        src={generator.icon}
                        alt={generator.name}
                        className="h-8 w-8"
                        aria-hidden="true"
                      />
                    </a>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                      {generator.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {ReactHtmlParser(generator.description)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </div>
  )
}
