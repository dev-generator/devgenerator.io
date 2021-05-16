import {
  DocumentTextIcon,
  SwitchHorizontalIcon,
  SaveIcon,
  UploadIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Enter Details',
    description: 'Add your data when it is applicable for a specific file to generate.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Include/Exclude',
    description: 'Define wether a item is included or excluded from the generation of the file.',
    icon: SwitchHorizontalIcon,
  },
  {
    name: 'Save File',
    description: 'Download outputed file to save to your local environment.',
    icon: SaveIcon,
  },
  {
    name: 'Upload Existing',
    description:
      'Upload your existing file to pre fill out form and adjust current details or add new details.',
    icon: UploadIcon,
  },
  {
    name: 'Copy Generated Version',
    description: 'Copy the Generated output with preview to paste in existing file of document.',
    icon: ClipboardListIcon,
  },
]

export default features
