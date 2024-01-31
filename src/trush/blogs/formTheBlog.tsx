// tc 定义函数时，可以写接口类型，也可以不写
// export default function FormTheBlog<T>({posts: T[]}) {
// @ts-ignore
export default function FormTheBlog({posts}) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {posts.map(({node}) => (
                            <article key={node.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={node.dateTime} className="text-gray-500">
                                        {node.date}
                                    </time>
                                    <a
                                        href={`/blogs/${node.slug}`}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {node.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={`/blogs/${node.slug}`}>
                                            <span className="absolute inset-0"/>
                                            {node.title}
                                        </a>
                                    </h3>
                                    <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    {/*<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={`/blogs/${node.author.node.slug}`}>
                                                <span className="absolute inset-0" />
                                                Author: {node.author.node.name}
                                            </a>
                                        </p>
                                        {/*<p className="text-gray-600">{post.author.role}</p>*/}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
