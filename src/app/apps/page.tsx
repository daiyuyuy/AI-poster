'use client'
import SelfNavbar from "@/components/navbarLogin";
import Footer from "@/components/footer";
import Img2img from "@/app/apps/image-to-image/img2img";

export default function Home() {
    return (
        <>
            <SelfNavbar/>
            <Img2img/>
            <Footer/>
        </>
    );
}
