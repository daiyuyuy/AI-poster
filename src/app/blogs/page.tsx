'use client'

import AllArticles from "@/components/blogs/AllArticles";
import SelfNavbar from "@/components/navbarLogout";
import Footer from "@/components/footer";

export default async function Page() {
  return (
      <>
          <SelfNavbar/>
          <div className="bg-white py-24 sm:py-24 m-4">
              {/*<h1 className="mb-20 text-center text-4xl font-bold">All Articles:</h1>*/}
              <AllArticles/>
          </div>
          <Footer/>
      </>

  );
}
