import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function Privacy() {
  return (
    <div>
      <main>
        <div className="bg-gray-50">
          <div className="relative overflow-hidden">
            <div className="relative pt-6 pb-16 sm:pb-24">
              <Navigation />
              <div className="relative py-16 overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                  <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                      className="absolute top-12 left-full transform translate-x-32"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                      className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                      className="absolute bottom-12 left-full transform translate-x-32"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="d3eb07ae-5182-43e6-857d-35c643af9034"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                  </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                  <div className="text-lg max-w-prose mx-auto">
                    <h1>
                      <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Privacy Policy
                      </span>
                    </h1>
                  </div>
                  <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                    <p>
                      This policy will explain areas of this website that may affect your privacy and personal details,
                      how we process, collect, manage and store those details and how your rights under the GDPR, DPA & PECR are adhere to.
                      Additionally it will explain the use of cookies or software, advertising or commercial sponsorship from third parties
                      and the download of any documents, files or software made available to you (if any) on this website. Further explanations
                      may be provided for specific pages or features of this website in order to help you understand how we, this website and
                      its third parties (if any) interact with you and your computer / device in order to serve it to you. Our contact information
                      is provided if you have any questions.
                    </p>
                    
                    <h2>Website Visitor Tracking</h2>
                    <p>
                      This website uses tracking software to monitor its visitors to better understand how they use it. The software will
                      save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website,
                      but will not store, save or collect personal information.
                    </p>
                    
                    <h2>External Website Links & Third Parties</h2>
                    <p>
                      Although we only look to include quality, safe and relevant external links, users are advised to adopt a policy of
                      caution before clicking any external web links mentioned throughout this website. (External links are clickable
                      text / button / image links to other websites.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}