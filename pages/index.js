import Head from 'next/head'
import { Navigation } from '../components/Navigation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevGenerator: Generate Config files for the likes of Rubocop, Package.json</title>
        <meta name="description" content="Generate files for various linters, base files, etc. without having to manually create or remember every available input that has to go into a file." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="max-w-7xl mx-auto px-4 sm:px-6">
        <Navigation />
      </header>
    </div>
  )
}
