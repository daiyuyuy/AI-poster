import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Do I get free credits?",
        answer:
            "Sorry, we don't offer free credits."
    },
    {
        question: "Can I download generated images to my computer?",
        answer:
            "Yes, you can download the generated images to your computer. You can also share these images on social media platforms such as Facebook, Twitter, and Instagram.",
    },
    {
        question: "Is the payment service secure?",
        answer:
            "Certainly, our payment service is secure. We entrust all financial processing to Stripe and do not retain any of your card details. Stripe maintains security standards on par with banks."
    },
    {
        question: "Can I get a refund?",
        answer:
            "Regrettably, due to the significant resources required for image processing, we are unable to offer refunds.",
    },
]

export default function Faq() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
