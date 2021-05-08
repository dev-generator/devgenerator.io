import ReactHtmlParser from 'react-html-parser'

const groups = [
  {
    id: 'ruby-gems',
    name: 'Ruby Gems',
    description: 'All Ruby base gems that have a config file generator needed.',
    background: 'bg-white',
    left: false,
    modules: [
      {
        name: 'Rubocop',
        description:
          'Generate  <a class="text-purple-600" href="https://docs.rubocop.org/">.rubocop.yml</a> file usable in your repo.',
        icon: '/img/icons/rubocop.svg',
        link: 'https://app.devgenerator.io/generator/rubocop',
      },
    ],
  },
  {
    id: 'node-modules',
    name: 'Node Modules',
    description: 'All Node base modules that have a config file generator needed.',
    background: 'bg-gray-100',
    left: true,
    modules: [
      {
        name: 'package.json',
        description:
          'Generate  <a class="text-purple-600" href="https://docs.npmjs.com/files/package.json">package.json</a> file usable in your repo.',
        icon: '/img/icons/npm.svg',
        link: 'https://app.devgenerator.io/generator/packagejson',
      },
    ],
  },
]

export function Generators() {
  return (
    <div>
      {groups.map((group) => (
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
                      className={`flex items-center justify-center h-12 w-12 rounded-md shadow-lg ${group.left ? "bg-white" : "bg-gray-200"}`}
                      href={generator.link}
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
