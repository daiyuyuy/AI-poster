import {ServerIcon, NewspaperIcon, Battery50Icon, ChartBarIcon} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Image-Based AI Generation.',
        description:
            'With Disney Pixar AI Posters, you can use your own images to create unique disney pixar artwork.',
        icon: NewspaperIcon,
    },
    {
        name: 'Prompt-Based AI Generation.',
        description: 'Using Disney Pixar AI Posters, you can describe the effects you want to create through text prompts.',
        icon: Battery50Icon,
    },
    {
        name: 'Customize Your Creations.',
        description: 'Disney AI Pixar Posters leverages advanced AI Models like Stable Diffusion XL have been trained on millions of images, equipping them with an intuitive understanding of patterns, shapes, and textures.',
        icon: ChartBarIcon,
    },
    {
        name: 'Integration with Platform.',
        description: 'Pixar Disney AI Poster offers seamless integration with platform. This provides users with an intuitive interface to interact with the tool and also connects them to a broader community of AI enthusiasts and artists.',
        icon: ServerIcon,
    },
]

export default function FeatureSections() {
    return (
        <div className="bg-white">
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Unlock the magic of
                                    Disney AI Posters Generator</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    With Disney AI Posters Generator, you can easily create eye-catching disney pixar
                                    style images without needing any artistic or coding skills.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                              aria-hidden="true"/>
                                                {feature.name}
                                            </dt>
                                            {' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src="https://imgc.cc/2023/11/07/654a5367edf9c.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Ready to dive in? <br/> Start your AI Disney Pixar Posters journey today.
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <a
                            href="/apps/page"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">
                            AI Disney Pixar Posters Interface Overview
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Familiarize Yourself with the AI Disney Pixar Posters Generator Interface
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            AI Disney Pixar Posters offers a range of parameters to craft your desired
                            artwork.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img src="/image/b232fd208f562bec3516dc13c7682fbb.webp"
                             alt="Disney Pixar AI Poster Generator Interface"
                             className="w-auto rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                             loading="lazy"
                             decoding="async"
                             data-nimg="1"
                             width="0"
                             height="0"
                             sizes="100vw"
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        <div className="relative pl-4">
                            <dt className="inline font-semibold text-gray-900">
                                Upload a picture: <></>
                            </dt>
                            <dd className="inline">
                                Upload the picture you wish to transform into a AI Disney Pixar Posters.
                            </dd>
                        </div>
                        <div className="relative pl-4">
                            <dt className="inline font-semibold text-gray-900">Prompt: <></></dt>
                            <dd className="inline">
                                The Prompt field serves as the entry point to guide artificial intelligence in
                                understanding your creative intent.
                            </dd>
                        </div>
                        <div className="relative pl-4">
                            <dt className="inline font-semibold text-gray-900">
                                Negative Prompt: <></>
                            </dt>
                            <dd className="inline">
                                This specialized section allows you to define the elements you explicitly wish to avoid
                                in the output image.
                            </dd>
                        </div>
                        <div className="relative pl-4">
                            <dt className="inline font-semibold text-gray-900">
                                Image Size:<></>
                            </dt>
                            <dd className="inline">Select the size of the output image.</dd>
                        </div>
                        <div className="relative pl-4">
                            <dt className="inline font-semibold text-gray-900">
                                Advanced options:<></>
                            </dt>
                            <dd className="inline">
                                Advanced features empower proficient users to meticulously customize their Disney AI
                                Pixar Posters creations.
                            </dd>
                        </div>
                        <div className="relative pl-4">
                            <dt className="inline font-semibold text-gray-900">
                                Output Area:<></>
                            </dt>
                            <dd className="inline">View your AI Disney Pixar Posters creation here.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
