export default function BlogPage({obj}) {
    return (
        <>
            <h1>{obj.title}</h1>
            <div dangerouslySetInnerHTML={{__html: obj.content}}/>
        </>
    )
}
