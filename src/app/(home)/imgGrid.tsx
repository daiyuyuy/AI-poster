const blogPosts = [
    {
        title: 'I love how it\'s so Disney-style',
        description:
            'I love how it\'s so Disney-style, it makes the photos even more amazing!',
        imageUrl:
            'https://imgc.cc/2023/11/07/654a573a13571.jpg',
        datetime: '2024-01-01',
    },
    {
        title: 'disney ai generator',
        description:
            'i love it! disney ai generator.',
        imageUrl:
            'https://imgc.cc/2023/11/07/654a574af0c2f.jpg',
        datetime: '2024-01-02',
    },
    {
        title: 'disney pixar dog ai',
        description:
            'disney pixar dog ai prompt: Create a movie poster inspired by Disney Pixar, titled "Westie Vibes." The poster features an adorable West Highland White terrier puppy with a big nose, round ears, and a colorful bandana. Additionally, there is a woman with long brown hair and brown eyes, wearing a black t-shirt and jeans, holding a camera.',
        imageUrl:
            'https://imgc.cc/2023/11/07/654a54f44d237.jpg',
        datetime: '2024-01-03',
    },
    {
        title: 'ai generated disney posters',
        description:
            'ai generated disney posters prompt: Create a movie poster titled "Whisker Wonders," inspired by the fusion of Disney Pixar and Japanese anime styles. The poster showcases a magical and fantastical world, with a captivating cat as the protagonist. The cat possesses large anime-style eyes, a whimsical personality, and embarks on a series of mystical adventures. This poster seamlessly combines the heartwarming charm of Disney Pixar with the captivating aesthetics of Japanese anime, presented in stunning 8K clarity.',
        imageUrl:
            'https://imgc.cc/2023/11/07/654a5303d7fe0.jpg',
        datetime: '2024-02-01',
    },
    {
        title: 'ai generated disney movies',
        description:
            'ai generated disney movies prompt: Create a movie poster titled "Cat Noir: The Feline Detective," inspired by the fusion of Disney Pixar and Japanese anime styles. The poster showcases an anime-style detective cat as the protagonist, with sharp, expressive eyes and a suave demeanor, solving captivating mysteries in a city inspired by Japanese anime. The poster\'s 8K resolution highlights every detail of the cat\'s adventures in a captivating and mysterious world.',
        imageUrl:
            'https://imgc.cc/2023/11/07/654a542436e12.jpg',
        datetime: '2024-02-03',
    },
    {
        title: 'disney ai covers',
        description:
            'disney ai covers prompt: Create a movie poster in Disney Pixar style for Sorin, a mischievous cloud sprite. The poster depicts Sorin riding lightning bolts, laughing with thunder, and embodies the whimsical charm of Disney Pixar movies. The aspect ratio is 9:16, and the poster has gained popularity on ArtStation for its epic composition.',
        imageUrl:
            'https://imgc.cc/2023/11/10/654d0e0825ce8.jpg',
        datetime: '2024-01-06',
    },
]


export default function ImgGrid() {
    return (
        // todo 上面有一条黑线，问题在这里。需要修复
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 ">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Disney AI Posters Generator Art Images</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Everyone is an artist, disney AI posters generator allowing each artist to effortlessly unleash the ideas in their minds.
                    </p>
                </div>
                <div
                    className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div key={post.title}
                             className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                            <img src={post.imageUrl} alt=""
                                 className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>

                            <div
                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.datetime}
                                </time>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <span className="absolute inset-0"/>
                                {post.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
