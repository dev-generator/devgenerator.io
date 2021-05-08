import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Team } from '../components/Team'
import { Features } from '../components/Features'
import { Generators } from '../components/Generators'

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <title>DevGenerator: Generate Config files for the likes of Rubocop, Package.json</title>
          <meta
            name="description"
            content="Generate files for various linters, base files, etc. without having to manually create or remember every available input that has to go into a file."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />
        <Team />
        <Features />
        <Generators />
      </main>
    </div>
  )
}
