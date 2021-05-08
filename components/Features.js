/* This example requires Tailwind CSS v2.0+ */
import {
  DocumentTextIcon,
  SwitchHorizontalIcon,
  SaveIcon,
  UploadIcon,
  ClipboardListIcon
} from '@heroicons/react/outline'

const features = [
  { name: 'Enter Details', description: 'Add your data when it is applicable for a specific file to generate.', icon: DocumentTextIcon },
  { name: 'Include/Exclude', description: 'Define wether a item is included or excluded from the generation of the file.', icon: SwitchHorizontalIcon },
  { name: 'Save File', description: 'Download outputed file to save to your local environment.', icon: SaveIcon },
  { name: 'Upload Existing', description: 'Upload your existing file to pre fill out form and adjust current details or add new details.', icon: UploadIcon },
  { name: 'Copy Generated Version', description: 'Copy the Generated output with preview to paste in existing file of document.', icon: ClipboardListIcon },
]

export function Features() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32" id="features">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-purple-700 uppercase">Features</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          A easy way to generate
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          See all the features supported apart of file Generation.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-700 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
