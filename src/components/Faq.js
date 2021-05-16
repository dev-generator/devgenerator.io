import faqs from '@/data/faqs'

export default function Faq() {
  return (
    <div className="bg-white" id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-500">
            Can’t find the answer you’re looking for? Reach out to us on{' '}
            <a
              href="https://github.com/dev-generator/app.devgenerator.io/discussions/new"
              className="text-purple-600"
            >
              github
            </a>{' '}
            and ask it to the community.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/dev-generator/app.devgenerator.io/discussions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition ease-in-out duration-150"
            >
              View more Questions...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
