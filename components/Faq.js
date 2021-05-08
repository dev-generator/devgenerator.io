const faqs = [
  {
    id: 1,
    question: "Is this secure?",
    answer: "Yes, all code is reviewed by the lead developer and the code is public so you can review yourself. Checkout the documentation for structure of adding a new feature to see how to dig into the code.",
  },
  {
    id: 2,
    question: "Can I copy or Download the generated file?",
    answer: "Yes and Yes, you will have the option to copy the generation or download the generated file based on your need."
  },
  {
    id: 3,
    question: "Will I be able to upload my current version?",
    answer: "Yes, we can take your existing file and convert to our tool to then allow you to download with the latest and greatest."
  },
  {
    id: 4,
    question: "Is my data saved on the server?",
    answer: "No, everything is worked in current session so if you leave a page you need to start over."
  }
]

export function Faq() {
  return (
    <div className="bg-white" id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-500">
            Can’t find the answer you’re looking for? Reach out to us on{' '}
            <a href="https://github.com/dev-generator/app.devgenerator.io/discussions/new" className="text-purple-600">github</a>{' '}
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
          <div class="mt-12 text-center">
            <a
              href="https://github.com/dev-generator/app.devgenerator.io/discussions"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition ease-in-out duration-150"
            >
              View more Questions...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}