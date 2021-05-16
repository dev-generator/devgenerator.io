const generators = [
  {
    id: 'ruby-gems',
    name: 'Ruby Gems',
    description: 'All Ruby base gems that have a config file generator needed.',
    background: 'bg-white',
    left: false,
    icon: '/img/icons/rubygems.svg',
    href: '/#ruby-gems',
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
    icon: '/img/icons/nodejs.svg',
    href: '/#node-modules',
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

export default generators
