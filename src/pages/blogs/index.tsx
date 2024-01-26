'use client'

import Head from "next/head";
import {GetStaticProps} from "next";


import {getAllPostsForHome} from "@/lib/fetchData";
import SelfNavbar from "@/components/navbarLogout";
import Footer from "@/components/footer";
import FormTheBlog from "@/pages/blogs/formTheBlog";
import BlogsLayout from "@/pages/blogs/blogsLayout";
// import MoreStories from "../../postComponents/more-stories";

// 从allPosts 取出 edges， edges 是一个列表
export default function Index({allPosts: {edges}, preview}) {
    const heroPost = edges[0]?.node;
    const morePosts = edges.slice(1);
    return (
        <>
            <Head>
                <title>{`Next.js Blog Example with`}</title>
            </Head>
            <SelfNavbar/>
            {heroPost && <FormTheBlog posts={edges}/>}
            {/*{morePosts.length > 0 && <MoreStories posts={morePosts}/>}*/}
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

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
    const allPosts = await getAllPostsForHome(preview);
    return {
        props: {allPosts, preview},
        revalidate: 10,
    };
};