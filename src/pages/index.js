import Head from 'next/head'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Features from '@/components/Features'
import Generators from '@/components/Generators'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <title>DevGenerator: Generate Config files for the likes of Rubocop, Package.json</title>
        </Head>
        <Hero />
        <Team />
        <Features />
        <Generators />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
