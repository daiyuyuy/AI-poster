import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
    // {
    //     name: 'Freelancer',
    //     id: 'tier-freelancer',
    //     href: '#',
    //     priceMonthly: '$0',
    //     description: 'Free forever.',
    //     features: ['Text to Image', 'Valid forever', 'Slow generation', 'High quality images'],
    //     mostPopular: false,
    // },
    {
        name: 'LightTrial',
        id: 'tier-trial',
        href: '#',
        priceMonthly: '$5.9',
        description: '30 Image Credits.',
        features: ['Upload your photo', 'Valid for 1 month', 'Fast generation', 'High quality images'],
        mostPopular: false,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$12.9',
        description: '100 Image Credits.',
        features: ['Upload your photo', 'Valid for 2 month', 'Fast generation', 'High quality images'],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$19.9',
        description: '200 Image Credits.',
        features: ['Upload your photo', 'Valid for 3 month', 'Fast generation', 'High quality images'],
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Unleash your creativity with disney pixar ai posters
                    </p>
                </div>
                <div
                    className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg my-6 transform transition duration-500 hover:scale-105">
                    <div
                        className="absolute top-0 right-0 px-3 py-1 bg-red-600 rounded-bl-xl text-white font-bold text-xs uppercase tracking-wider animate-pulse">50%
                        Off
                    </div>
                    <div className="text-center text-white"><h2 className="text-2xl font-extrabold mb-2">Happy New Year
                        Awaits!</h2><p className="mb-4 font-semibold">Exclusive Deals on All Plans. Feel the joy!</p>
                        <button
                            className="mt-4 bg-white text-black font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">Claim
                            Your Deal
                        </button>
                    </div>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    Purchase credits as per your needs. Each credit allows you to generate one AI artwork. One-time
                    payment. No subscription. No hidden fees.
                </p>
                <div
                    className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                                            'text-lg font-semibold leading-8'
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span
                                        className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600"
                                                       aria-hidden="true"/>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                One-time payment
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

