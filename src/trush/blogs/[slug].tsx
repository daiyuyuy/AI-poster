import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/wp_cms/fetchData";
import SelfNavbar from "@/components/navbarLogout";
import Footer from "@/components/footer";
import BlogPage from "@/trush/blogs/blogPage";
import BlogsLayout from "@/trush/blogs/blogsLayout";
import Index from "@/trush/blogs/index";

export default function Post({ post, posts, preview }) {
    const router = useRouter();
    const morePosts = posts?.edges;

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <>
            <SelfNavbar/>
            <BlogPage obj={post}/>
            <Footer/>
        </>
    );
}

Index.getLayout = function getLayout(page) {
    return (
        <BlogsLayout>
            {page}
        </BlogsLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({
                                                         params,
                                                         preview = false,
                                                         previewData,
                                                     }) => {
    const data = await getPostAndMorePosts(params?.slug, preview, previewData);

    return {
        props: {
            preview,
            post: data.post,
            posts: data.posts,
        },
        revalidate: 10,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug();

    return {
        paths: allPosts.edges.map(({ node }) => `/blogs/${node.slug}`) || [],
        fallback: true,
    };
};
