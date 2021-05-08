import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Navigation } from './Navigation'
import { Sponsor } from './Sponsor'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

function DarkModeSwitch({ enabled, onChange }) {
  return (
    <div className="flex items-center space-x-4">
      <SunIcon
        className={`${
          enabled ? 'text-gray-300' : 'text-yellow-400'
        } h-8 w-8 transition-colors duration-200`}
      />
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled ? 'bg-black' : 'bg-purple-700'
        } relative inline-flex flex-shrink-0 h-9 w-18 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-8 w-8 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      <MoonIcon
        className={`${
          enabled ? 'text-gray-900' : 'text-gray-300'
        } h-8 w-8 transition-colors duration-200`}
      />
    </div>
  )
}

export function Hero() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Navigation />

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="">Generate Files</span>
                <span className="text-purple-600"> with ease</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Generate files for various linters, base files, etc. without having to manually
                create or remember every available input that has to go into a file.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-center pb-4">
              <DarkModeSwitch enabled={enabled} onChange={setEnabled} />
            </div>
            <img
              className="relative rounded-lg shadow-lg"
              src={`${enabled ? '/img/app-dark-mode.png' : '/img/app-light-mode.png'}`}
              alt="App View"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <Sponsor />
      </div>
    </div>
  )
}
