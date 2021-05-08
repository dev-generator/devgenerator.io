const navigation = {
  features: [
    { name: 'Features', href: '/#features' },
    { name: 'Ruby Gems', href: '/#ruby-gems' },
    { name: 'Node Modules', href: '/#node-modules' },
  ],
  support: [
    { name: 'Documentation', href: 'https://app.devgenerator.io/documentation' },
    { name: 'Submit a Feature Request', href: 'https://github.com/dev-generator/app.devgenerator.io/issues/new?assignees=chiefpansancolt&labels=enhancement%2C+new&template=feature-request.md&title=Feature+Request:' },
    { name: 'Submit a Bug', href: 'https://github.com/dev-generator/app.devgenerator.io/issues/new?assignees=chiefpansancolt&labels=bug%2C+new&template=bug_report.md&title=' },
    { name: 'Ask a Question', href: 'https://github.com/dev-generator/app.devgenerator.io/discussions/new' },
  ],
  github: [
    { name: 'Bugs', href: 'https://github.com/dev-generator/app.devgenerator.io/labels/bug' },
    { name: 'Feature Requests', href: 'https://github.com/dev-generator/app.devgenerator.io/labels/enhancement' },
    { name: 'Questions', href: 'https://github.com/dev-generator/app.devgenerator.io/discussions' },
    { name: 'Sponsor', href: 'https://github.com/sponsors/chiefpansancolt?o=esb' },
  ],
  site: [
    { name: 'Status Page', href: 'https://devgenerator.instatus.com/' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Site Repo', href: 'https://github.com/dev-generator/devgenerator.io' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/dev_generator',
      hover: 'hover:text-light-blue-400',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 20 20" ariaHidden="true" {...props}>
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/dev-generator/devgenerator.io',
      hover: 'hover:text-white',
      icon: (props) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.com/invite/fzXW3rW',
      hover: 'hover:text-indigo-400',
      icon: (props) => (
        <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd" fill="currentColor" {...props}>
          <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCu498dSB67OJvy9o9xuPX8Q',
      hover: 'hover:text-red-600',
      icon: (props) => (
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" {...props}>
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-28 -mt-10 -mb-4"
              src="/img/logos/Dev Generator Logo White.png"
              alt="DevGenerator Logo"
            />
            <p className="text-gray-400 text-base">
              Making Generating files easier for the everyday developers.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className={`h-6 w-6 ${item.hover}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Features</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.features.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-purple-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-purple-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">GitHub</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.github.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-purple-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Site</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.site.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-purple-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2020 DevGenerator, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
